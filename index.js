const { Client, GatewayIntentBits, Partials, Collection, Message, ActivityType, PermissionsBitField, EmbedBuilder } = require('discord.js');
var collectorMap = new Map();
const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const https = require('https');
const http = require('http');
const app = express();
const PORT = process.env.PORT || 8080; // Change to the desired HTTPS port
const fs = require('fs');
const websiteEvent = require('./database/website.js')

const eventModel = require('./database/code.js')
 // app.use(express.json()); 
// app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
const eventModelz = require('./database/data.js');

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
    
       connection.on('connected', async() => {
            console.log('Connected to MongoDB Successfully!');

	        const dataCC = await eventModelz.findOne({ name: 'secrets' });

process.env = dataCC.fieldMap.chunks[0]
        });

var envthing;

        connection.on('err', err => {
            console.error(`Error Occured From MongoDB: \n${err.message}`);
        });

        connection.on('disconnected', () => {
            console.warn('Connection Disconnected!');
        });






// const registerRoute = (method, routeName, routeCode) => {
//     app[method](routeName, async (req, res) => {
//         try {
//             await eval(`(async () => { ${routeCode} })()`); // Ensure route.code is valid JavaScript
//         } catch (error) {
//             console.error('Error executing route code:', error);
//             res.status(500).send('Internal Server Error');
//         }
//     });
// };

// // Function to initialize routes from MongoDB
// const initializeRoutes = async () => {
//     try {
//         const routes = await websiteEvent.find({});
//         routes.forEach(route => {
//             const method = route.type.toLowerCase(); // Ensure method is valid (get, post, etc.)
//             registerRoute(method, route.name, route.code);
//         });
//     } catch (error) {
//         console.error('Error initializing routes:', error);
//     }
// };

// // Function to update routes dynamically
// const updateRoutes = (route) => {
//     const method = route.type.toLowerCase();

//     // Log the route object
//     console.log('Updating route:', route);

//     // Remove the existing route if it exists
//     app._router.stack = app._router.stack.filter(layer => !layer.route || layer.route.path !== route.name);

//     // Register the new route
//     registerRoute(method, route.name, route.code);
// };

// // Initialize routes and set up Change Stream for real-time updates
// const startServer = async () => {
//     await initializeRoutes();

//     // Set up Change Stream to listen for changes in the websiteEvent collection
//     const changeStreams = websiteEvent.watch([], { fullDocument: 'updateLookup' });

//     changeStreams.on('change', (change) => {
//         // Log the entire change object
//         console.log('Change detected:', change);

//         switch (change.operationType) {
//             case 'insert':
//                 console.log('Insert operation detected');
//                 updateRoutes(change.fullDocument);
//                 break;
//             case 'update':
//                 console.log('Update operation detected');
//                 updateRoutes(change.fullDocument);
//                 break;
//             case 'delete':
//                 console.log('Delete operation detected');
//                 // Remove the route if it was deleted from the database
//                 app._router.stack = app._router.stack.filter(layer => !layer.route || layer.route.path !== change.documentKey._id);
//                 break;
//             default:
//                 console.log('Unknown operation detected');
//                 break;
//         }
//     });


// };

// startServer();






//=============================================================================================================================



  const httpServer = http.createServer(app);
    // const httpsServer = https.createServer(options, app);
	// const HTTP_PORT = process.env.HTTP_PORT || 80;
const HTTP_PORT = 8080
try{
   httpServer.listen(HTTP_PORT)
}catch(err) {
	console.error(err.stack)
}
	
    //httpsServer.listen(HTTPS_PORT, () => console.log(`HTTPS Server running on port ${HTTPS_PORT}`));


    // Set up HTTP or HTTPS server based on your configuration
    // const options = {
    //     cert: fs.readFileSync('./ssl/bandobot_xyz.crt', 'utf8'),
    //     ca: fs.readFileSync('./ssl/bandobot_xyz.ca-bundle', 'utf8'),
    //     key: fs.readFileSync('./ssl/bandobot.key', 'utf8')
    // };





// Function to handle requests based on type

// Function to handle wildcard requests
// const handleWildcardRequest = async (eventName, req, res, type) => {
//   try {
//     const result = await websiteEvent.findOne({ name: eventName, type: type });

//     if (result) {
//       await eval(`(async () => { ${result.code} })()`); // Ensure result.code is valid JavaScript
//     } else {
//       res.status(404).send('Route not found');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Internal Server Error');
//   }
// };


// ['get', 'post', 'put', 'delete', 'patch', 'all', 'use'].forEach(method => {
//   app[method]('/', async (req, res) => 

// 	  const handleRequest = async (req, res, type) => {
//   try {
//     const result = await websiteEvent.findOne({ name: '/', type: type }); // Modify query as per your needs

//     if (result) {
//       await eval(`(async () => { ${result.code} })()`); // Ensure result.code is valid JavaScript
//     } else {
//       res.status(404).send('Route not found');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Internal Server Error');
//   }
// };

//     await handleRequest(req, res, method);
//   });
// });


// Initialize routes from MongoDB and start server
// const initializeRoutes = async () => {
//   try {
//     // Fetch all routes from MongoDB
//     const routes = await websiteEvent.find({});

//     routes.forEach(route => {
//       const method = route.type.toLowerCase(); // Ensure method is valid (get, post, etc.)
      
//       // Register route dynamically
//       app[method](route.name, async (req, res) => {
//         try {
//           // Execute the code associated with the route
//           await eval(`(async () => { ${route.code} })()`); // Ensure route.code is valid JavaScript
//         } catch (error) {
//           console.error('Error executing route code:', error);
//           res.status(500).send('Internal Server Error');
//         }
//       });
//     });

//   } catch (error) {
//     console.error('Error initializing routes:', error);
//   }
// };

// // Call the function to initialize routes and start the server
// initializeRoutes();


// const updateRoutes = (change) => {
//   const route = change.fullDocument;
//   const method = route.type.toLowerCase();

//   // Remove the existing route if it exists
//   app._router.stack = app._router.stack.filter(layer => layer.route && layer.route.path !== route.name);

//   // Register the new route
//   app[method](route.name, async (req, res) => {
//     try {
//       // Execute the code associated with the route
//       await eval(`(async () => { ${route.code} })()`); // Ensure route.code is valid JavaScript
//     } catch (error) {
//       console.error('Error executing route code:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });
// };

//   const changeStream = websiteEvent.watch();

//   changeStream.on('change', (change) => {
//     switch (change.operationType) {
//       case 'insert':
//         updateRoutes(change);
//         break;
//       case 'update':
//         updateRoutes(change);
//         break;
//       case 'delete':
//         // Remove the route if it was deleted from the database
//         app._router.stack = app._router.stack.filter(layer => layer.route && layer.route.path !== change.documentKey._id);
//         break;
//       default:
//         break;
//     }
//   });




const handleRequest = async (req, res, type) => {
  try {
    const result = await websiteEvent.findOne({ name: '/', type: type });

    if (result) {
      await eval(`(async () => { ${result.code} })()`);
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

const handleWildcardRequest = async (eventName, req, res, type) => {
  try {
    // Retrieve all events of the specified type
    const events = await websiteEvent.find({ type: type });

    // Filter events to find the first one that starts with the eventName  && !event.name.includes(`/${stop}`)
    const result = events.find(event => event.name.startsWith(eventName));

    if (result) {
      await eval(`(async () => { ${result.code} })()`);
    } else {
      res.status(404).send('Event not found');
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

app.get('/', async (req, res) => {
  await handleRequest(req, res, 'get');
});

app.post('/', async (req, res) => {
  await handleRequest(req, res, 'post');
});

app.put('/', async (req, res) => {
  await handleRequest(req, res, 'put');
});

app.delete('/', async (req, res) => {
  await handleRequest(req, res, 'delete');
});

app.patch('/', async (req, res) => {
  await handleRequest(req, res, 'patch');
});

app.all('/', async (req, res) => {
  await handleRequest(req, res, 'all');
});

app.use('/', async (req, res, next) => {
  await handleRequest(req, res, 'use');
  next();
});

// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/img', express.static(path.join(__dirname, 'img')));
// app.use('/js', express.static(path.join(__dirname, 'js')));
// app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/*', async (req, res) => {
  const eventName = req.params[0] || '';
	console.log(eventName)
  await handleWildcardRequest(eventName, req, res, 'get');
});

app.post('/*', async (req, res) => {
  const eventName = req.params[0] || '';
  await handleWildcardRequest(eventName, req, res, 'post');
});

app.put('/*', async (req, res) => {
  const eventName = req.params[0] || '';
  await handleWildcardRequest(eventName, req, res, 'put');
});

app.delete('/*', async (req, res) => {
  const eventName = req.params[0] || '';
  await handleWildcardRequest(eventName, req, res, 'delete');
});

app.patch('/*', async (req, res) => {
  const eventName = req.params[0] || '';
  await handleWildcardRequest(eventName, req, res, 'patch');
});

app.all('/*', async (req, res) => {
  const eventName = req.params[0] || '';
  await handleWildcardRequest(eventName, req, res, 'all');
});

app.use('/*', async (req, res, next) => {
  const eventName = req.params[0] || '';
  await handleWildcardRequest(eventName, req, res, 'use');
  next();
});


// Example endpoint to fetch data from GitHub




// client.commands = new Collection()
// client.aliases = new Collection()
// client.slashCommands = new Collection();
// client.buttons = new Collection();
// client.voiceCollection = new Collection()
// client.prefix;
// client.emotes = config.emoji
// module.exports = client;


// client.snipes = new Map()
// client.editsnipes = new Map()





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

async function ItsReady(document) {
const dataCC = await eventModelz.findOne({ name: 'secrets' });

process.env = dataCC.fieldMap.chunks[0]
}



// const eventModel = require('./database/code.js')

// client.on('applicationCommandCreate', async (command) => {eventModel.find({event:"applicationCommandCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('applicationCommandDelete', async (command) => {eventModel.find({event:"applicationCommandDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('applicationCommandUpdate', async (oldCommand, newCommand) => {eventModel.find({event:"applicationCommandUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('channelCreate', async (channel) => {eventModel.find({event:"channelCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('channelDelete', async (channel) => {eventModel.find({event:"channelDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('channelPinsUpdate', async (channel, date) => {eventModel.find({event:"channelPinsUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('channelUpdate', async (oldChannel, newChannel) => {eventModel.find({event:"channelUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('debug', async (message) => {eventModel.find({event:"debug"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('warn', async (message) => {eventModel.find({event:"warn"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('emojiCreate', async (emoji) => {eventModel.find({event:"emojiCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('emojiDelete', async (emoji) => {eventModel.find({event:"emojiDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('emojiUpdate', async (oldEmoji, newEmoji) => {eventModel.find({event:"emojiUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('error', async (error) => {eventModel.find({event:"error"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('guildBanAdd', async (ban) => {eventModel.find({event:"guildBanAdd"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('guildBanRemove', async (ban) => {eventModel.find({event:"guildBanRemove"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('guildCreate', async (guild) => {eventModel.find({event:"guildCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('guildDelete', async (guild) => {eventModel.find({event:"guildDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('guildUnavailable', async (guild) => {eventModel.find({event:"guildUnavailable"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('guildIntegrationsUpdate', async (guild) => {eventModel.find({event:"guildIntegrationsUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('guildMemberAdd', async (member) => {eventModel.find({event:"guildMemberAdd"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('guildMemberAvailable', async (member) => {eventModel.find({event:"guildMemberAvailable"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('guildMemberRemove', async (member) => {eventModel.find({event:"guildMemberRemove"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('guildMembersChunk', async (members, guild, data) => {eventModel.find({event:"guildMembersChunk"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('guildMemberUpdate', async (oldMember, newMember, message) => {eventModel.find({event:"guildMemberUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('guildUpdate', async (oldGuild, newGuild) => {eventModel.find({event:"guildUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on("interactionCreate", async (interaction) => {eventModel.find({event:"interactionCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('invalidated', async()=> {eventModel.find({event:"invalidated"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('invalidRequestWarning', async (invalidRequestWarningData) => {eventModel.find({event:"invalidRequestWarning"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('inviteCreate', async (invite) => {eventModel.find({event:"inviteCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('inviteDelete', async (invite) => {eventModel.find({event:"inviteDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('messageCreate',async(message)=>{if(message.author.bot)return;eventModel.find({event:"messageCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('messageDelete', async (message) => {eventModel.find({event:"messageDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('messageReactionRemoveAll', async (message) => {eventModel.find({event:"messageReactionRemoveAll"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('messageReactionRemoveEmoji', async (reaction) => {eventModel.find({event:"messageReactionRemoveEmoji"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('messageDeleteBulk', async (messages) => {eventModel.find({event:"messageDeleteBulk"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on("messageReactionAdd", async (reaction, user) => {eventModel.find({event:"messageReactionAdd"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('messageReactionRemove', async (reaction, user) => {eventModel.find({event:"messageReactionRemove"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('messageUpdate',async(oldMessage, newMessage)=>{if(newMessage.author === client.user)return;eventModel.find({event:"messageUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('presenceUpdate', async (oldPresence, newPresence) => {eventModel.find({event:"presenceUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('rateLimit', async (rateLimitData) => {eventModel.find({event:"rateLimit"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on("ready", async () => {eventModel.find({event:"ready"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('roleCreate', async (role) => {eventModel.find({event:"roleCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('roleDelete', async (role) => {eventModel.find({event:"roleDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('roleUpdate', async (oldRole, newRole) => {eventModel.find({event:"roleUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('threadCreate', async (thread) => {eventModel.find({event:"threadCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('threadDelete', async (thread) => {eventModel.find({event:"threadDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('threadListSync', async (threads) => {eventModel.find({event:"threadListSync"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('threadMemberUpdate', async (oldMember, newMember) => {eventModel.find({event:"threadMemberUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('threadMembersUpdate', async (oldMembers, newMembers) => {eventModel.find({event:"threadMembersUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('threadUpdate', async (oldThread, newThread) => {eventModel.find({event:"threadUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('typingStart', async (channel, user) => {eventModel.find({event:"typingStart"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('userUpdate', async (oldUser, newUser) => {eventModel.find({event:"userUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('webhookUpdate', async channel => {eventModel.find({event:"webhookUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('shardDisconnect', async (closeEvent, shardId) => {eventModel.find({event:"shardDisconnect"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('shardError', async (error, shardId) => {eventModel.find({event:"shardError"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('shardReady', async (shardId, unavailableGuilds) => {eventModel.find({event:"shardReady"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('shardReconnecting', async (shardId) => {eventModel.find({event:"shardReconnecting"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('shardResume', async (shardId, replayedEvents) => {eventModel.find({event:"shardResume"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('stageInstanceCreate', async (stageInstance) => {eventModel.find({event:"stageInstanceCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('stageInstanceUpdate', async (oldStageInstance, newStageInstance) => {eventModel.find({event:"stageInstanceUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('stageInstanceDelete', async (stageInstance) => {eventModel.find({event:"stageInstanceDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('stickerCreate', async (sticker) => {eventModel.find({event:"stickerCreate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('stickerDelete', async (sticker) => {eventModel.find({event:"stickerDelete"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('stickerUpdate', async (oldSticker, newSticker) => {eventModel.find({event:"stickerUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});
// client.on('voiceStateUpdate',async(oldState, newState)=>{eventModel.find({event:"voiceStateUpdate"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await eval(`async () =>{ ${document.code} }`)();});});});





//eventModel.find({event:"Events"}).then(async(documents)=>{documents.forEach(async(document) =>{if(!document)return;await ItsReady(document);await eval(`async () =>{ ${document.code} }`)(); });});


// const changeStream = eventModelz.watch();

// changeStream.on('change', async (change) => {
//   if (
//     change.operationType === 'update' &&
//     change.updateDescription.updatedFields &&
//     change.updateDescription.updatedFields['fieldMap.chunks.0.token']
//   ) {
//     const updatedDataCC = await eventModelz.findOne({ name: 'secrets' });
//     process.env = updatedDataCC.fieldMap.chunks[0];
//     client.login(process.env.token);
//   }
// });

// (async () => {
//   const dataCC = await eventModelz.findOne({ name: 'secrets' });
//   process.env = dataCC.fieldMap.chunks[0];
//   client.login(process.env.token);
// })();


//====================================================================
