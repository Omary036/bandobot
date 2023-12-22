const mongoose = require("mongoose");

const voicedata = new mongoose.Schema({
serverID: String,
userID: String,
channelID: String,
messageID: String,
});

const gay = mongoose.model("voicedata", voicedata);

module.exports = gay;
