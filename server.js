require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URL;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("Error: ", err.message));

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is ready on http://localhost:${PORT} `);
});

//MONGODB_URL=mongodb+srv://aruni_patel:ArU@6395@nodeproject.zed4n.mongodb.net/<dbname>?retryWrites=true&w=majority
// USERNAME=aruni_patel
// PASSWORD=ArU@6395
