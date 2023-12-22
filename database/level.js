const mongoose = require("mongoose");

const Level = new mongoose.Schema({
  serverID: String,
  userID: String,
  username: String,
  level: Number,
  xp: Number,
});

const lvll = mongoose.model("Levels", Level);

module.exports = lvll;
