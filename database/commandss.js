const mongoose = require("mongoose");

const db = new mongoose.Schema({
  serverID: String,
  Cmds: Array
});

const gay = mongoose.model("disable-enable", db);

module.exports = gay;
