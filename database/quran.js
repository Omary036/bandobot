const mongoose = require("mongoose");

const db = new mongoose.Schema({
  messages: String,
  pages: Number,
});

const gay = mongoose.model("quran", db);

module.exports = gay;
