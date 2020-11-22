const { mongo } = require("./mongoClient");
const { v4: uuidv4 } = require("uuid");
const { encodePassword } = require("./utils.js");
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
        console.log(error.message);
      }
    },

    createUser: async (root, { username, password }) => {
      try {
        const db = await mongo();
        const accountId = uuidv4();
        const createdAt = Math.floor(new Date().getTime() / 1000);
        const encodedPassword = await encodePassword(password);

        db.collection("users").insertOne({
          username,
          password: encodedPassword,
          accountId,
          createdAt,
        });
        return { username, accountId, createdAt };
      } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
      }
    },
  },
};
