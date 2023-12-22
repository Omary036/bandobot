const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
serverID: String,
userID: String,
messageID: String,
messageID2: String,
commands: String,
args1: String,
args2: String,
args3: String,
args4: String,
args5: String,
args6: String,
args7: String,
args8: String,
args9: String,
args10: String,
args11: String,
args12: String,
     
});

module.exports = mongoose.model('setupOfCmds', Schema);
