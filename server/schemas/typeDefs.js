const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Userprofile {
    _id: ID
    name: String
    age:Int
    city:String
    level: String
    drink: Boolean
    smoke: Boolean
  }

 

  type Userlogin {
    _id: ID
   username: String
    email: String
    password: String
    
  }


  type Auth {
    token: ID
    userlogin: Userlogin
  }

  type Query {
    userprofile: Userprofile
  }

  type Mutation {
    addUserlogin(username: String!, email: String!, password: String!): Userlogin
    updateUser(firstName: String!, age: Int!,
       city: String!, level: String!,drink:Boolean!,smoke:Boolean!): Userprofile
    login(email: String!, password: String!):Userlogin
  }
`;

module.exports = typeDefs;
