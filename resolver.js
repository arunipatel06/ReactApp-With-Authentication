exports.resolver = {
  Query: {
    getAllRecipes: () => {},
  },

  Mutation: {
    addRecipe: async (
      parent,
      { name, description, category, instructions, username },
      { Recipe }
    ) => {
      try {
        const newRecipe = await Recipe({
          name,
          description,
          category,
          instructions,
          username,
        }).save();
        return newRecipe;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
