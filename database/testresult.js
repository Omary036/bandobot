const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  serverID: String,
  userID: String,
  messageID: String,
  messageID2: String, 
  time: { type: Date, required: true }, // Change the type to Date
  expired: String || 'no',
});

const test = mongoose.model("Test-Result", resultSchema);

module.exports = test;
