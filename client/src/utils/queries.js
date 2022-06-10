import { gql } from '@apollo/client';



export const QUERY_USER = gql`
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
