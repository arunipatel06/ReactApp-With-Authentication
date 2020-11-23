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
    accountId: String!
    username: String!
    createdAt: Int
    password: String
    joinDate: String
    email: String
    favourites: [Recipe]
  }
  type loginInfo {
    isMatch: Boolean
  }
  type Query {
    getAllRecipes: [Recipe]
    signIn(username: String!, password: String!): loginInfo
  }

  type Mutation {
    addRecipe(
      name: String!
      category: String!
      description: String!
      instructions: String!
      username: String!
    ): Recipe

    createUser(username: String!, password: String!): User
  }
`;
