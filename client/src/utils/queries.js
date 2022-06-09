import { gql } from '@apollo/client';



export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      city
      level
      drink
      smoke
      }
    }
`;
