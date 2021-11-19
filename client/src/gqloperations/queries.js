import {gql} from '@apollo/client'
export const GET_ALL_QUOTES = gql`
query getAllQuotes{
    quotes{
      name
      by{
        _id
        firstName
      }
    }
  }
`

export const GET_MY_PROFILE = gql`
  query getMyProfile{
    user:myprofile{
      firstName
      lastName
      email
      quotes{
        name
      }
    } 
  }

`

export const GET_USER_BY_ID = gql`
query getUserById($userid: ID!) {
  user(_id: $userid) {
    _id
    firstName
    lastName
    email
    quotes{
      name
    }
  }
}

`

