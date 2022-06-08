const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Userlogin {
    _id: ID
    username: String
    email: String
    password: String
    name: String
    age:Number
    city:String
    level: String
    drink: Boolean
    smoke: Boolean
  }

 

  


  type Auth {
    token: ID
    userlogin: Userlogin
  }

  type Query {
    userlogin: Userlogin
  }

  type Mutation {

    addUserlogin(username: String!, email: String!, password: String!):Auth
    updateUser(firstName: String!, age: Number!,
       city: String!, level: String!,drink:Boolean!,smoke:Boolean!): Userlogin
    login(email: String!, password: String!):Auth

  }
`;

module.exports = typeDefs;
