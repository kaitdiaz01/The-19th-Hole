import { gql } from '@apollo/client';



export const QUERY_USER = gql`
  {
    user {
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
