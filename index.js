const { Client, GatewayIntentBits, Partials, Collection, Message, ActivityType, PermissionsBitField, EmbedBuilder } = require('discord.js');
var collectorMap = new Map();
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const https = require('https');
const http = require('http');

// Serve static files from your existing website directory (bandobot.xyz)
const app = express();
const PORT = process.env.PORT || 443; // Change to the desired HTTPS port
const fs = require('fs');

// Serve static files from your existing website directory (bandobot.xyz)
app.use(express.static(path.join(__dirname, 'bandobot.xyz')));

// Serve index.html file directly (change the path according to your directory structure)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));

// Example endpoint to fetch data from GitHub

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'));
});

const options = {
  cert: fs.readFileSync('./ssl/bandobot_xyz.crt','utf8'),
  ca: fs.readFileSync('./ssl/bandobot_xyz.ca-bundle','utf8'),
  key: fs.readFileSync('./ssl/bandobot.key','utf8')
};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

httpServer.listen(PORT);
httpsServer.listen(PORT);





const ALL_INTENTS = 
    (1 << 0) +  // GUILDS
    (1 << 1) +  // GUILD_MEMBERS
    (1 << 2) +  // GUILD_BANS
    (1 << 3) +  // GUILD_EMOJIS_AND_STICKERS
    (1 << 4) +  // GUILD_INTEGRATIONS
    (1 << 5) +  // GUILD_WEBHOOKS
    (1 << 6) +  // GUILD_INVITES
    (1 << 7) +  // GUILD_VOICE_STATES
    (1 << 8) +  // GUILD_PRESENCES
    (1 << 9) +  // GUILD_MESSAGES
    (1 << 10) + // GUILD_MESSAGE_REACTIONS
    (1 << 11) + // GUILD_MESSAGE_TYPING
    (1 << 12) + // DIRECT_MESSAGES
    (1 << 13) + // DIRECT_MESSAGE_REACTIONS
    (1 << 14);  // DIRECT_MESSAGE_TYPING


const client = new Client({
	intents: [
    ALL_INTENTS,
  	GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages, 
		GatewayIntentBits.GuildPresences, 
		GatewayIntentBits.GuildMessageReactions, 
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildBans,
    
	], 
	partials: [Partials.Channel, Partials.Message, Partials.User, Partials.GuildMember, Partials.Reaction, Partials.GuildScheduledEvent],
  disableMentions: 'everyone',
});



require("dotenv").config();

const config = require('./config.json');

client.commands = new Collection()
client.aliases = new Collection()
client.slashCommands = new Collection();
client.buttons = new Collection();
client.voiceCollection = new Collection()
client.prefix;
client.emotes = config.emoji
module.exports = client;


client.snipes = new Map()
client.editsnipes = new Map()



client.on('shardError', error => {
	console.error('A websocket connection encountered an error:', error);
});

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});


client.on('error', error => {
  console.error('Bot encountered an error:', error);
});
    
const {mongoose, connection} = require('mongoose');

const mongoDBConnected = mongoose.connect(process.env.MNGS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
      autoIndex: true,
      
});
    
       connection.on('connected', () => {
            console.log('Connected to MongoDB Successfully!');
        });

        connection.on('err', err => {
            console.error(`Error Occured From MongoDB: \n${err.message}`);
        });

        connection.on('disconnected', () => {
            console.warn('Connection Disconnected!');
        });

        if (process.env.NODE_ENV === 'production') {
          // Set up production error handling
          app.use((err, req, res, next) => {
            res.status(500).send('Something went wrong!');
          });
        } else {
          // Development mode - show detailed error messages
          app.use((err, req, res, next) => {
            res.status(500).send(err.stack);
          });
        }

const eventModel = require('./database/code');

client.on('applicationCommandCreate', async (command) => {eventModel.find({event:"applicationCommandCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('applicationCommandDelete', async (command) => {eventModel.find({event:"applicationCommandDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('applicationCommandUpdate', async (oldCommand, newCommand) => {eventModel.find({event:"applicationCommandUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('channelCreate', async (channel) => {eventModel.find({event:"channelCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('channelDelete', async (channel) => {eventModel.find({event:"channelDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('channelPinsUpdate', async (channel, date) => {eventModel.find({event:"channelPinsUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('channelUpdate', async (oldChannel, newChannel) => {eventModel.find({event:"channelUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('debug', async (message) => {eventModel.find({event:"debug"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('warn', async (message) => {eventModel.find({event:"warn"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('emojiCreate', async (emoji) => {eventModel.find({event:"emojiCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('emojiDelete', async (emoji) => {eventModel.find({event:"emojiDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('emojiUpdate', async (oldEmoji, newEmoji) => {eventModel.find({event:"emojiUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('error', async (error) => {eventModel.find({event:"error"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('guildBanAdd', async (ban) => {eventModel.find({event:"guildBanAdd"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('guildBanRemove', async (ban) => {eventModel.find({event:"guildBanRemove"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('guildCreate', async (guild) => {eventModel.find({event:"guildCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('guildDelete', async (guild) => {eventModel.find({event:"guildDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('guildUnavailable', async (guild) => {eventModel.find({event:"guildUnavailable"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('guildIntegrationsUpdate', async (guild) => {eventModel.find({event:"guildIntegrationsUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('guildMemberAdd', async (member) => {eventModel.find({event:"guildMemberAdd"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('guildMemberAvailable', async (member) => {eventModel.find({event:"guildMemberAvailable"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('guildMemberRemove', async (member) => {eventModel.find({event:"guildMemberRemove"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('guildMembersChunk', async (members, guild, data) => {eventModel.find({event:"guildMembersChunk"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('guildMemberUpdate', async (oldMember, newMember, message) => {eventModel.find({event:"guildMemberUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('guildUpdate', async (oldGuild, newGuild) => {eventModel.find({event:"guildUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on("interactionCreate", async (interaction) => {eventModel.find({event:"interactionCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('invalidated', async()=> {eventModel.find({event:"invalidated"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('invalidRequestWarning', async (invalidRequestWarningData) => {eventModel.find({event:"invalidRequestWarning"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('inviteCreate', async (invite) => {eventModel.find({event:"inviteCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('inviteDelete', async (invite) => {eventModel.find({event:"inviteDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('messageCreate',async(message)=>{if(message.author.bot)return;eventModel.find({event:"messageCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('messageDelete', async (message) => {eventModel.find({event:"messageDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('messageReactionRemoveAll', async (message) => {eventModel.find({event:"messageReactionRemoveAll"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('messageReactionRemoveEmoji', async (reaction) => {eventModel.find({event:"messageReactionRemoveEmoji"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('messageDeleteBulk', async (messages) => {eventModel.find({event:"messageDeleteBulk"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on("messageReactionAdd", async (reaction, user) => {eventModel.find({event:"messageReactionAdd"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('messageReactionRemove', async (reaction, user) => {eventModel.find({event:"messageReactionRemove"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('messageUpdate',async(oldMessage, newMessage)=>{if(newMessage.author === client.user)return;eventModel.find({event:"messageUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('presenceUpdate', async (oldPresence, newPresence) => {eventModel.find({event:"presenceUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('rateLimit', async (rateLimitData) => {eventModel.find({event:"rateLimit"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on("ready", async () => {eventModel.find({event:"ready"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('roleCreate', async (role) => {eventModel.find({event:"roleCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('roleDelete', async (role) => {eventModel.find({event:"roleDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('roleUpdate', async (oldRole, newRole) => {eventModel.find({event:"roleUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('threadCreate', async (thread) => {eventModel.find({event:"threadCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('threadDelete', async (thread) => {eventModel.find({event:"threadDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('threadListSync', async (threads) => {eventModel.find({event:"threadListSync"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('threadMemberUpdate', async (oldMember, newMember) => {eventModel.find({event:"threadMemberUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('threadMembersUpdate', async (oldMembers, newMembers) => {eventModel.find({event:"threadMembersUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('threadUpdate', async (oldThread, newThread) => {eventModel.find({event:"threadUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('typingStart', async (channel, user) => {eventModel.find({event:"typingStart"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('userUpdate', async (oldUser, newUser) => {eventModel.find({event:"userUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('webhookUpdate', async channel => {eventModel.find({event:"webhookUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('shardDisconnect', async (closeEvent, shardId) => {eventModel.find({event:"shardDisconnect"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('shardError', async (error, shardId) => {eventModel.find({event:"shardError"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('shardReady', async (shardId, unavailableGuilds) => {eventModel.find({event:"shardReady"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('shardReconnecting', async (shardId) => {eventModel.find({event:"shardReconnecting"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('shardResume', async (shardId, replayedEvents) => {eventModel.find({event:"shardResume"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('stageInstanceCreate', async (stageInstance) => {eventModel.find({event:"stageInstanceCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('stageInstanceUpdate', async (oldStageInstance, newStageInstance) => {eventModel.find({event:"stageInstanceUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('stageInstanceDelete', async (stageInstance) => {eventModel.find({event:"stageInstanceDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('stickerCreate', async (sticker) => {eventModel.find({event:"stickerCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('stickerDelete', async (sticker) => {eventModel.find({event:"stickerDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('stickerUpdate', async (oldSticker, newSticker) => {eventModel.find({event:"stickerUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
client.on('voiceStateUpdate',async(oldState, newState)=>{eventModel.find({event:"voiceStateUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});





eventModel.find({event:"Events"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});

 


 client.login(process.env.token)

//====================================================================







