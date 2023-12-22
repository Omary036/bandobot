const mongoose = require('mongoose');

const TicketDataSchema = new mongoose.Schema({
        serverID: String,
    MessageID: String,
    TicketNumber: Number,
    WhitelistedRole: String
});

const MessageModel = module.exports = mongoose.model('TicketData', TicketDataSchema);
