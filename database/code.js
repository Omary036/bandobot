const mongoose = require("mongoose");


const result = new mongoose.Schema({
event: String || 'Commands',
name: String,
cmd: Array,
code: String || `await message.channel.send('There is an error in the system! please try again later..')`,
description: String || 'No description',
userPerms: String || 'Default',
botPerms: String || 'Default',
usage: String || 'No usage',
set: String || 'Enable',
start: String,
end: String


 
});

const test = mongoose.model("JScode", result);

module.exports = test;
