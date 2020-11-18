require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
// const { buildFederatedSchema } = require("@apollo/federation");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolver");
const { makeExecutableSchema } = require("graphql-tools");

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// The GraphQL endpoint
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is ready on http://localhost:${PORT} `);
});
