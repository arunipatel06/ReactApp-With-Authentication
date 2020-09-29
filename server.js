require("dotenv").config();
const express = require("express");
const { mongo } = require("./mongoClient");
const app = express();

app.get("/", async function (req, res) {
  const db = await mongo();

  db.collection("userlist")
    .find()
    .toArray(function (err, docs) {
      if (err) throw err;
      console.log(docs);
    });
  res.send("done");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is ready on http://localhost:${PORT} `);
});

// const mongoose = require("mongoose");
// const Recipe = require("./models/Recipe");
// const User = require("./models/User");
// const uri = process.env.MONGODB_URL;

// //bring graphql-express middleware
// const { graphiqlExpress, graphqlExpress } = require("apollo-server-express");
// const { makeExecutableSchema } = require("graphql-tools");

// const { typeDefs } = require("./schema");
// const resolver = require("./resolver");

// //create schema
// const schema = makeExecutableSchema({
//   typeDefs,
//   resolver,
// });

// //connect with database
// mongoose
//   .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log("DB CONNECTED"))
//   .catch((err) => console.log("Error: ", err.message));

// const app = express();

// app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

// //connect schema with GraphQl
// app.use(
//   "/graphql",
//   graphqlExpress({
//     schema,
//     context: {
//       User,
//       Recipe,
//     },
//   })
// );
