import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;



export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $age: String!
    $city: String!
		$level: String!
		$drink: Boolean!
		$smoke: Boolean!

  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      age: $age
      city: $city
      level: $level
      drink: $drink
      smoke: $smoke
    ) {
      token
      user {
        _id
      }
    }
  }
`;
