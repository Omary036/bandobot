const mongoose = require("mongoose");

const db = new mongoose.Schema({
cmd: String,
serverID: String,
userID: String,
channelID: String,
messageID: String,
    messageID2: String,
    message: String,
    number: Number,
    mode: String || 'medium',
});

const ah = mongoose.model("helpcmd", db);

module.exports = ah;
