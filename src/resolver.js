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
    signIn: async (root, { emailAddress, password }) => {
      try {
        let user = {};
        const db = await mongo();
        await db
          .collection('users')
          .findOne({ emailAddress })
          .then((docs) => {
            user = docs;
          });

        if (!user) return 'User Not Exist';
        const isMatch = await comparePassword(user.password, password);
        return { isMatch };
      } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
      }
    },
  },

  Mutation: {
    createUser: async (root, { firstName, lastName, emailAddress, password }) => {
      try {
        const db = await mongo();
        const accountId = uuidv4();
        const createdAt = Math.floor(new Date().getTime() / 1000);
        const encodedPassword = await encodePassword(password);

        db.collection('users').insertOne({
          firstName,
          lastName,
          emailAddress,
          password: encodedPassword,
          accountId,
          createdAt,
        });
        return { firstName, lastName, emailAddress, accountId, createdAt };
      } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
      }
    },
  },
};
