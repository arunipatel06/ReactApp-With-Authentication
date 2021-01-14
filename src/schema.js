const { gql } = require('apollo-server-express');

exports.typeDefs = gql`
  type User {
    firstName: String!
    lastName: String
    accountId: String!
    emailAddress: String!
    createdAt: Int
    password: String
    joinDate: String
  }
  type loginInfo {
    isMatch: Boolean
  }
  type Query {
    signIn(emailAddress: String!, password: String!): loginInfo
  }

  type Mutation {
    createUser(firstName: String!, lastName: String, emailAddress: String!, password: String!): User
  }
`;
