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
//const bodyParser = require('body-parser');

const eventModel = require('./database/code.js')
//const cors = require('cors');

//app.use(cors({ origin: '*' }));
//app.use(cors());

//{
  //origin: 'https://bandobot.xyz/proxy',
  //credentials: true
 // }
//const cors = require('cors');
//const morgan = require('morgan');
//const helmet = require('helmet');


// Security headers for SharedArrayBuffer support
// app.use((req, res, next) => {
//     res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
//     res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
//     next();
// });

// Use helmet for setting various HTTP headers for security
//app.use(helmet());

// Enable CORS for all routes
//app.use(cors());

// Logging HTTP requests
//app.use(morgan('dev'));




app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json());
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
//const httpsServer = https.createServer(options, app);
	// const HTTP_PORT = process.env.HTTP_PORT || 80;
const HTTP_PORT = 8080
//try{
httpServer.listen(HTTP_PORT)
//}catch(err) {
//	console.error(err.stack)
//}
	
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

    // Filter events to find the first one that matches the eventName
    let result = events.find(event => {


      if (event.name.endsWith('*')) {
        const prefix = event.name.slice(0, -1); // Remove the '*' from the end
        return eventName.startsWith(prefix);
      }
      // Check for exact match without the wildcard
if(event.name.endsWith('/')) {
 return eventName.slice(0, -1) === event.name
}
      return eventName === event.name
	
    });

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



//const eventModel = require('./database/code.js')


const changeStream = eventModelz.watch();

changeStream.on('change', async (change) => {
  if (
    change.operationType === 'update' &&
    change.updateDescription.updatedFields &&
    change.updateDescription.updatedFields['fieldMap.chunks.0.token']
  ) {
    const updatedDataCC = await eventModelz.findOne({ name: 'secrets' });
    process.env = updatedDataCC.fieldMap.chunks[0];
    client.login(process.env.token);
  }
});

(async () => {
  const dataCC = await eventModelz.findOne({ name: 'secrets' });
  process.env = dataCC.fieldMap.chunks[0];
  client.login(process.env.token);
})();



//====================================================================
