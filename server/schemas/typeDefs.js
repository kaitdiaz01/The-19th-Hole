const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Userprofile {
    _id: ID
    name: String
    age:Number
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
    addUserlogin(username: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, age: Number,
       city: String, level: String,drink:Boolean,smoke:Boolean): Userlogin
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
