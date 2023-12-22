const mongoose = require("mongoose");

const Level = new mongoose.Schema({
  userID: { type: String, require: true, unique: true },
  message: { type: Number },
});

const lvlll = mongoose.model("bandosystem", Level);

module.exports = lvlll;
