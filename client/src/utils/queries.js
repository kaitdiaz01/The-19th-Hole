import { gql } from '@apollo/client';



export const QUERY_USERS = gql`
  query findAllUsers{
    User {
      firstName
      lastName
      email
      password
      age
      city
      level
      drink
      smoke
      }
    }
`;
