const mongoose = require("mongoose");

const Level = new mongoose.Schema({
serverID: String,
userID: String,
Messages: Number,
LastMessages: String,
});

const lvll = mongoose.model("messageUser", Level);

module.exports = lvll;
