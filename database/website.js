const mongoose = require("mongoose");

const Level = new mongoose.Schema({
name: String,
code: String,
});

const lvll = mongoose.model("Website", Level);

module.exports = lvll;
