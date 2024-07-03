const mongoose = require("mongoose");

const Level = new mongoose.Schema({
name: String,
type: String,
code: String,
});

const lvll = mongoose.model("Website", Level);

module.exports = lvll;
