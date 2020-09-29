const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  jonDate: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
  },
  favourites: {
    type: [Schema.Types.ObjectId],
    ref: "Recipe",
  },
});

module.exports = mongoose.model("User", UserSchema);
