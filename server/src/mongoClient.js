/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-use-before-define */
require('dotenv').config();
// eslint-disable-next-line prefer-destructuring
const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGODB_URL;

exports.mongo = async () => {
  try {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    return database(client);
  } catch (err) {
    console.error('Error: ', err.message);
  }
};

async function database(client) {
  const db = await client.db('ReactApp-With-Authentication');
  return db;
}
