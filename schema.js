const { gql } = require("apollo-server");
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
    username: String! @unique
    password: String!
    joinDate: String
    email: String
    favourites: [Recipe]
  }
`;
