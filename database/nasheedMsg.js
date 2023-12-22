const mongoose = require("mongoose");

const db = new mongoose.Schema({
    serverID: String,
    channelID: String,
    messageID: String,
    link: String,
    banner: String,
    Song: String,
    Volume: String,
    Loop: String,
    Status: String,
});

const gay = mongoose.model("nasheed", db);

module.exports = gay;
