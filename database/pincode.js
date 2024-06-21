const mongoose = require("mongoose");

const db = new mongoose.Schema({
userID: String,
pincode: String,
set: String,
total: String,
fieldMap: {},
prem: String,
});

const ah = mongoose.model("pincode", db);

module.exports = ah;
