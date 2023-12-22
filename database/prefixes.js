const mongoose = require("mongoose");

const prefix = new mongoose.Schema({
        Prefix: {
            type: String
        },
        userID: String
});
    
const uwu = mongoose.model("prefixes", prefix);
    
module.exports = uwu;
