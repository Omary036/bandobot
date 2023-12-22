const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  serverID: String,
  userID: String,
  username: String,
  coins: Number,
  bank: Number,
});

const model = mongoose.model("ProfileModels", profileSchema);

module.exports = model;
