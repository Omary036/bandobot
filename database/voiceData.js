const mongoose = require('mongoose');

const awwww = new mongoose.Schema({
    serverID: String,
    channelID: String,
});

const everrr = mongoose.model('voiceCreate', awwww);

module.exports = everrr
