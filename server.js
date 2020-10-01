require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { resolver } = require("./resolver");
const { mongo } = require("./mongoClient");

const app = express();

app.get("/", async function (req, res) {
  const db = await mongo();
  console.log("DB Connected.....");

  db.collection("userlist")
    .find()
    .toArray(function (err, docs) {
      if (err) throw err;
      console.log(docs);
    });
  res.send("done");
});

const PORT = process.env.PORT || 3000;
const server = new ApolloServer({ typeDefs, resolver });

server.listen(PORT, () => {
  console.log(`Server is ready on http://localhost:${PORT} `);
});
