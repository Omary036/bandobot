const mongoose = require("mongoose");

const db = new mongoose.Schema({
userID: String,
pincode: String,
set: String,
fieldMap: {}
});

const ah = mongoose.model("pincode", db);

module.exports = ah;
