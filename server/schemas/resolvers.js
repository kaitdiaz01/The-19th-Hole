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
          }
      });
    },
   
    },
   
  


   
    
  
  Mutation: {
   
     
    addUserlogin: async (parent,{username,email,password}) => {
      const user = await Userlogin.create({username,email,password});
      const token = signToken(user);
      return {token,user};

    }
  }
}


module.exports = resolvers;
