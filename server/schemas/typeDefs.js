const { gql } = require("apollo-server-express");

const typeDefs = gql`
 
  type User {
    _id: ID
    username: String
    email: String
    password: String
    name: String
    age: String
    city: String
    level: String
    drink: Boolean
    smoke: Boolean
   
  }

<<<<<<< HEAD
 
  

=======
>>>>>>> main
  type Auth {
    token: ID
    user: User
  }

  type Query {
    
    user: User
    
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    
    updateUser(city: String!, level: String!,drink:Boolean!,smoke:Boolean!): User
  
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
