const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type Recipe {
    name: String!
    category: String!
    description: String!
    createdDate: String
    instructions: String!
    likes: Int
    username: String!
  }

  type User {
    firstName: String!
    lastName: String
    accountId: String!
    emailAddress: String!
    createdAt: Int
    password: String
    joinDate: String
    favourites: [Recipe]
  }
  type loginInfo {
    isMatch: Boolean
  }
  type Query {
    getAllRecipes: [Recipe]
    signIn(emailAddress: String!, password: String!): loginInfo
  }

  type Mutation {
    addRecipe(
      name: String!
      category: String!
      description: String!
      instructions: String!
      username: String!
    ): Recipe

    createUser(firstName: String!, lastName: String, emailAddress: String!, password: String!): User
  }
`;
