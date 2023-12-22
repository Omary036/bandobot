const mongoose = require("mongoose");

const db = new mongoose.Schema({
serverID: String,
})

const ah = mongoose.model("server", db);

module.exports = ah;
