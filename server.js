require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Recipe = require("./models/Recipe");
const User = require("./models/User");

const uri = process.env.MONGODB_URL;

//connect with database
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("Error: ", err.message));

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is ready on http://localhost:${PORT} `);
});
