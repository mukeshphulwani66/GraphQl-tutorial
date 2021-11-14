import {gql} from "apollo-server"
const typeDefs = gql`
 type Query{
    users:[User]
    user(id:ID!):User
    quotes:[Quote]
    iquote(by:ID!):[Quote]
 }
 type User{
     id:ID!
     firstName:String
     lastName:String
     email:String
     password:String
     quotes:[Quote]
 }
 type Quote{
     name:String
     by:ID
 }

 type Mutation{
     signupUserDummy(userNew:UserInput!):User
 }

 input UserInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
 }

`
export default typeDefs