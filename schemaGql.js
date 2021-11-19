import {gql} from "apollo-server"
const typeDefs = gql`
 type Query{
    users:[User]
    user(_id:ID!):User
    quotes:[QuoteWithName]
    iquote(by:ID!):[Quote]
    myprofile:User
 }

 type QuoteWithName{
     name:String
     by:IdName
 }
 
 type IdName{
     _id:String
     firstName:String
 }

 type User{
     _id:ID!
     firstName:String!
     lastName:String!
     email:String!
     password:String!
     quotes:[Quote]
 }
 type Quote{
     name:String!
     by:ID!
 }

 type Token{
     token:String!
 }

 type Mutation{
     signupUser(userNew:UserInput!):User
     signinUser(userSignin:UserSigninInput!):Token
     createQuote(name:String!):String
 }

 input UserInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
 }
 input UserSigninInput{
    email:String!
    password:String!
 }

`
export default typeDefs