import { gql } from "apollo-boost";

export const GETALLRECIPES = gql`
  query {
    getAllRecipes {
      name
      description
      category
      createdDate
      instructions
      likes
      username
    }
  }
`;
