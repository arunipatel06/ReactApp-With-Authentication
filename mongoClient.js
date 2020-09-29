require("dotenv").config();
const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGODB_URL;

exports.mongo = async () => {
  try {
    const client = new MongoClient(url);
    await client.connect();
    return database(client);
  } catch (err) {
    console.log("Error: ", err.message);
  }
};

async function database(client) {
  const db = await client.db("User");
  return db;
}
