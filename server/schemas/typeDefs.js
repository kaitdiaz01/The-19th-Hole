const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID
		firstName: String
		lastName: String
		email: String
		password: String
		age: String
		city: String
		level: String
		drink: Boolean
		smoke: Boolean
	}

	type Auth {
		token: ID
		user: User
	}

	type Query {
		user: User
	}

	type Mutation {
		addUser(
			firstName: String!
			lastName: String!
			email: String!
			password: String!
		): Auth
		updateUser(
			city: String!
			level: String!
			drink: Boolean!
			smoke: Boolean!
		): Userlogin
		login(email: String!, password: String!): Auth
	}
`;

module.exports = typeDefs;
