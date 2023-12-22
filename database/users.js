const mongoose = require("mongoose");

const db = new mongoose.Schema({
  serverID: String,
  channelID: String,
  user: String,
  bot: Array,
});


const gay = mongoose.model("users", db);

/*gay.createIndexes([
    {myField1: 1},
    {myField2: 1},
    {myField3: 1 },
    {myField4: 1 },
{myField5: 1 },
{myField6: 1 },
{myField7: 1 },
{myField8: 1 },
{myField9: 1 }]).then((err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('working')
        }
    });*/

module.exports = gay;
