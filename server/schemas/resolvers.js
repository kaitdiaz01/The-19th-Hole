const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    userprofile: async (parent,{city,drink,smoke,level}) => {
      return Userprofile.find({
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
      addUserlogin: async (parent,{username,email,password,name,age,city,level,drink,smoke}) => {
      const user = await Userlogin.create({username,email,password,name,age,city,level,drink,smoke});
      const token = signToken(user);
      return {token,user};
    },
    updateUser: async (parent,{age,level,drink,smoke}) =>{
      const user = await userlogin.put({age,level,drink,smoke});
      const token = signToken(user);
      return {token,user};
    },
    login: async(parent,{email,password})=>{
      const userlogin= await userlogin.findOne({ email,password });

      if (!userlogin) {
        throw new AuthenticationError('No!userlogin with this email found!');
      }

      const correctPw = await userlogin.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(userlogin);
      return { token, userlogin };
    }, 
    }
  }
  


module.exports = resolvers;
