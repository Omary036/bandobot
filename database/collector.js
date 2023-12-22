const mongoose = require("mongoose");

const Level = new mongoose.Schema({
serverID: String,
userID: String,
messageID: String,
col: String,
});

const lvll = mongoose.model("collector", Level);

module.exports = lvll;
