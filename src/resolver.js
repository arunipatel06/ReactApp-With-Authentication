/* eslint-disable consistent-return */
/* eslint-disable func-names */
/* eslint-disable no-console */
const { v4: uuidv4 } = require('uuid');
const { mongo } = require('./mongoClient');
const { encodePassword } = require('./utils.js');
const { comparePassword } = require('./utils.js');

// The resolvers
exports.resolvers = {
  Query: {
    getAllRecipes: async (root, args) => {
      let recipes = [];
      const db = await mongo();
      await db
        .collection('list')
        .find()
        .toArray()
        .then((docs) => {
          recipes = docs;
        });
      return recipes;
    },

    signIn: async (root, { username, password }) => {
      try {
        let user = {};
        const db = await mongo();
        await db
          .collection('users')
          .findOne({ username })
          .then((docs) => {
            user = docs;
          });

        if (!user) return 'User Not Exist';
        const isMatch = await comparePassword(user.password, password);
        return isMatch;
      } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
      }
    },
  },

  Mutation: {
    addRecipe: async (root, args) => {
      try {
        const db = await mongo();
        db.collection('list').insertOne({
          name: args.name,
          description: args.description,
          category: args.category,
          instructions: args.instructions,
          username: args.username,
        });
        return args;
      } catch (error) {
        console.error(error.message);
      }
    },

    createUser: async (root, { username, password }) => {
      try {
        const db = await mongo();
        const accountId = uuidv4();
        const createdAt = Math.floor(new Date().getTime() / 1000);
        const encodedPassword = await encodePassword(password);

        db.collection('users').insertOne({
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
