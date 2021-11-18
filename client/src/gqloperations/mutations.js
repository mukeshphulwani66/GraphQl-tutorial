import {gql} from '@apollo/client'
export const SIGNUP_USER = gql`
    mutation createUser($userNew:UserInput!){
        user:signupUser(userNew:$userNew){ 
           firstName
        }
    }
`
export const LOGIN_USER = gql`
mutation SigninUser($userSignin:UserSigninInput!){
    user:signinUser(userSignin:$userSignin){ 
      token
    }
  }
`

export const CREATE_QUOTE = gql`
  mutation createQuote($name:String!){
    quote:createQuote(name:$name)
  }
`