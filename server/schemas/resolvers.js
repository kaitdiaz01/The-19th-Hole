const { AuthenticationError } = require('apollo-server-express');
const { User} = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {

    User: async (parent, { city, drink, smoke, level }) => {
      return User.find({
        where: {

            city: city,
            drink: drink,
            smoke: smoke,
            level: level
          },
          exclude: {
            email: email,
            password: password
          }
      });
    };
   
    },
   
  


   
    
  
  Mutation: {
      addUser: async (parent,{username,email,password,name,age,city,level,drink,smoke}) => {
      const user = await User.create({username,email,password,name,age,city,level,drink,smoke});
      const token = signToken(user);
      return {token,user};
    },
    updateUser: async (parent,{age,level,drink,smoke}) =>{
      const user = await User.put({age,level,drink,smoke});
      const token = signToken(user);
      return {token,user};
    },
    login: async(parent,{email,password})=>{
      const user= await User.findOne({ email,password });

      if (!user) {
        throw new AuthenticationError('No!userlogin with this email found!');
      }

      const correctPw = await User.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    }, 
    }
  }
  



module.exports = resolvers;
