/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

const url = process.env.MONGODB_URL;

async function database(client) {
  const db = await client.db('ReactApp-With-Authentication');
  return db;
}

exports.mongo = async () => {
  try {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    return database(client);
  } catch (err) {
    console.log('Error: ', err.message);
  }
};
