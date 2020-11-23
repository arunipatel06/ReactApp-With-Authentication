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

  type Query {
    getAllRecipes: [Recipe]
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
