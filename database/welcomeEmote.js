const mongoose = require("mongoose");

const db = new mongoose.Schema({
serverID: String,
userID: String,
    channelID: String,
msgID: String,
});

const gay = mongoose.model("welcomeEmote", db);

module.exports = gay;
