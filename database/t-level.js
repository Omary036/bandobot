const mongoose = require("mongoose");


const levelenable = new mongoose.Schema({

  
serverID: String,
  enabled: String,
});

const test = mongoose.model("Level-toggle", levelenable);

module.exports = test;
