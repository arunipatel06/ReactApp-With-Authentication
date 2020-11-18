const { mongo } = require("./mongoClient");

// The resolvers
exports.resolvers = {
  Query: {
    getAllRecipes: async (root, args) => {
      console.log("inside get all receipe");
      const db = await mongo();
      db.collection("list")
        .find()
        .toArray(function (err, docs) {
          if (err) throw err;
          console.log(docs);
        });
      return [];
    },
  },

  Mutation: {
    addRecipe: async (root, args) => {
      try {
        const db = await mongo();
        db.collection("list").insertOne({
          name: args.name,
          description: args.description,
          category: args.category,
          instructions: args.instructions,
          username: args.username,
        });
        return args;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
