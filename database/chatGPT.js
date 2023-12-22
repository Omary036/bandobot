const mongoose = require("mongoose");


const result = new mongoose.Schema({
serverID: String,
userID: String,
message: String,
messageID: String,
fetch: String,
generate: String,
    generate2: String,
    generate3: String,
    generate4: String,
    generate5: String,
    count: String,
});

const test = mongoose.model("chatGPT", result);

module.exports = test;
