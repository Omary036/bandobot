const mongoose = require("mongoose");


const result = new mongoose.Schema({
name: String,
fieldMap: {},
});

const test = mongoose.model("data", result);

module.exports = test;
