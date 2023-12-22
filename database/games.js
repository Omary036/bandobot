const mongoose = require("mongoose");

const Level = new mongoose.Schema({
serverID: String,
oneWord: String || 'None',
oneWordUser: String || 'None',
counting: Number || 'None',
countingUser: String || 'None',
});

const lvll = mongoose.model("games", Level);

module.exports = lvll;
