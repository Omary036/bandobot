const mongoose = require("mongoose");

const Level = new mongoose.Schema({
  serverID: String,
  userID: String,
  channelID: String,
  messageID: String,
  react: Number,
});

const lvlll = mongoose.model("WLCreaction", Level);

module.exports = lvlll;
