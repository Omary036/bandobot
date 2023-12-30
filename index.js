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


// Serve index.html file directly (change the path according to your directory structure)
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, 'index.html'));


  const guilds = client.guilds.cache.size; // Number of guilds (servers)
    const users = client.users.cache.size; // Number of users
    let channels = 0;

    client.guilds.cache.forEach(guild => {
        channels += guild.channels.cache.size; // Total channels across all guilds
    });
	
	const htmlCode = `<!-- 
	Made by Omry: 12/17/2023 hosted toasted loasted uwusted
 -->

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Bando - A Discord Bot</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!-- you can change the website icon by change the href link -->
	<link rel="icon" type="image/png" href="./img/image.png" href="/">

	<!-- css -->
	<link rel="stylesheet" type="text/css" href="./css/coloring.css">
	<link rel="stylesheet" type="text/css" href="./css/style.css">
	<link rel="stylesheet" type="text/css" href="./css/txtformatting.css">
	<link rel="stylesheet" type="text/css" href="./css/shadow.css">
	<link rel="stylesheet" type="text/css" href="./css/loading.css">
	<!-- css end -->

	<!-- font awesome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

	<script>
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const visitorIP = data.ip;
	      
        // Use visitorIP as needed
      })
      .catch(error => {
        console.error('Error fetching IP:', error);
      });
  </script>
</head>

	  <!-- Your head content -->
<body class="on">
	<div class="loading" id="loading-box">
		<div class="loading-item"><div class="loading-progress"></div></div>
	</div>

	<main class="main">

		<!-- navbar -->
		<div class="navbar">
			<div class="container">
				<div class="navbar-nav">
					<div class="navbar-brand">
						<!-- You can change it with Image if you want. -->
						<span class="navbar-brand-txt"><img src="./img/image.png" alt="BandoBot Logo" style="height: 30px; width: auto; margin-right: 9px;vertical-align: bottom;" href="/"><a class="txt-bold type-1" href="/">BandoBot</a></span>
					</div>

					<span class="navbar-toggler" id="toggler"><i onclick="toggleNavbar(this)" class="fas fa-bars"></i></span>

					<div class="navs" id="navs">
						<!-- You can change the href value and the text value -->
						<div class="navs-item notbtn"><a href="commands" class="txt-uppercase">Commands</a></div>
						<div class="navs-item notbtn"><a href="#pricing" class="txt-uppercase">Subscriptions</a></div>
						<div class="navs-item notbtn"><a href="https://discord.com/invite/xEZbBr6qH5" class="txt-uppercase">Support</a></div>
						<div class="navs-item notbtn"><a href="https://discord.com/api/oauth2/authorize?client_id=962775906458423368&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FNaSY7avYpt&response_type=code&scope=gdm.join%20guilds.join%20bot%20identify" class="txt-uppercase">Invite</a></div>
						<div class="navs-item"><a href="https://discord.com/api/oauth2/authorize?client_id=962775906458423368&response_type=code&redirect_uri=https%3A%2F%2Fbandobot.xyz%2Fauth%2Fredirect&scope=identify+guilds+email"><button class="btn txt-uppercase shadow-sm">Login</button></a></div>
					</div>
				</div>
			</div>
		</div>
		<!-- navbar end -->		

		<!-- jumbotron -->
		<div class="jumbotron">
			<div class="container">
				<div class="jumbotron-items">
					<div class="jumbotron-item">
						<span class="jumbotron-t">Why bando bot?</span>
						<div class="content">
  <p><strong>Welcome to Bando Bot:</strong> Elevate Your Discord Experience! Ready to revolutionize your server? Bando Bot brings a fresh breeze of unique commands and awesome features!</p>
  <p><strong>Guess what?</strong> Our latest version rocks Discord Cloud (secure storage) for ultimate stability. No more glitches, just smooth sailing! Store files and messages worry-free, always within reach!</p>
  <p><strong>But wait, there's more!</strong> Dive into exciting games, keep things in line with our moderation tools, and craft personalized voice chats - your server, your way!</p>
  <p><strong>Unlock the magic with 'bndhelp' and join the adventure. Elevate your Discord game with Bando Bot!</strong></p>
</div>
						<div class="jumbotron-buttons">
							<button class="btn" onclick="location.href='#features'">Features</button>
							<button class="btn blue" onclick="location.href='https://discord.com/api/oauth2/authorize?client_id=962775906458423368&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.gg%2FNaSY7avYpt&response_type=code&scope=gdm.join%20guilds.join%20bot%20identify'">Invite</button>
						</div>

						
					</div>
					<div class="jumbotron-item">
						<img src="./img/img1.svg" alt="image">
					</div>
				</div>
			</div>
		</div>
		<!-- jumbotron end -->
		<span class="scroll-down"><i class="fas fa-arrow-down" id="features"></i></span>
	</main>

	<!-- features -->
	<div class="features-box">
		<h1 class="features-t" id="features">We are provide the best for you.</h1>
		<div class="container">
			<div class="features">
				<div class="feature">
					<img class="feature-img" src="./img/feature1.svg"></img>
<div class="feature-info">
    <h2 class="feature-info-t">Feature 1</h2>
    <p class="feature-info-d">
        <strong>Seamless Storage</strong><br>  </p>
        <p class="feature-info-d"> <strong>Enhanced Stability:</strong> Bando Bot seamlessly integrates with Discord Cloud, ensuring a stable environment for file and message storage within your server.<br></p>
       <p class="feature-info-d">  <strong>Command Usage:</strong> Employ <code>bndsave &lt;image|text&gt;</code> to save files and messages effortlessly. Access your stored data via <code>bndcloud</code> with a custom pincode for retrieval.<br></p>
        <p class="feature-info-d"> <strong>Simplified Storage:</strong> Effortlessly manage and access files, enhancing server organization for a smoother experience!</p>
  
</div>

				</div>
				<div class="feature">
					<img class="feature-img" src="./img/feature2.svg"></img>
					<div class="feature-info">
    <h2 class="feature-info-t">Feature 2</h2>
    <p class="feature-info-d">
        <strong>Diverse Commands</strong><br>
	    <br>
        <strong>New Command - <code>bndflag</code>:</strong> Explore a fresh server interaction approach with <code>bndflag</code>!<br>
        <strong>Engaging Fun Commands:</strong> Enjoy a range of fun activities, games, and quizzes.<br>
        <strong>Innovative Functionality:</strong> Discover unique commands elevating server dynamics.<br>
	    <br>
        <strong>Experience:</strong><br>
	    <br>
        - <code>bndflag</code> introduces a new server interaction.<br>
        - Dive into engaging activities.<br>
        - Explore innovative functionalities.<br>
	    <br>
       <strong> Enhance your server dynamics effortlessly!</strong>
    </p>
</div>
				</div>
				<div class="feature">
					<img class="feature-img" src="./img/feature3.svg"></img>
					<div class="feature-info">
						<h2 class="feature-info-t">Feature 3</h2>
						<p class="feature-info-d"><strong>Customized Voice Spaces:</strong> Effortlessly personalize your voice channels to create unique communication environments perfectly suited to your server's needs.<br>
							<br>

<strong>Robust Command System:</strong> Explore a diverse range of Discord.js language-powered commands. Manage your server efficiently with the support of a MongoDB database, ensuring a seamless user experience. For more information check out commands on top of it.<br>
<br>
<strong>Inclusive Content Support:</strong> Apart from that, we support Quran recitations, soulful nasheed, and more, creating an inclusive community atmosphere. Enjoy the bando bot!</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- features end -->



    <section>

		
        <a href="/" class="pricing-card">
	<div> <h1 class="pricing-t" id="services">Pricing.</h1> </div>
            <div>
 <img class='imgcheck' src="https://bandobot.xyz/img/image.png" alt="BandoBot Price" width="50" height="50">
                <h3>Starter</h3>
                <h4>$4.99</h4>
                <p>per Month</p>
                <ul>
                    <li>100 Transaction</li>
                    <li>2% Cash Back</li>
                    <li>$10,000 limit</li>
                </ul>
                <Button class="btn primary">Choose Plan</Button>
            </div>
        </a>

               <a href="/" class="pricing-card">
            <div>
 <img class='imgcheck' src="https://bandobot.xyz/img/image.png" alt="BandoBot Price" width="50" height="50">
                <h3>Popular</h3>
                <h4>$9.99</h4>
                <p>per Month</p>
                <ul>
                    <li>1000 Transaction</li>
                    <li>3.5% Cash Back</li>
                    <li>$100,000 limit</li>
                </ul>
                <Button class="btn blue">Choose Plan</Button>
            </div>
        </a>

 

        <a href="/" class="pricing-card">
            <div>
 <img class='imgcheck' src="https://bandobot.xyz/img/image.png" alt="BandoBot Price" width="50" height="50">
                <h3>Standard</h3>
                <h4>$24.99</h4>
                <p>per Month</p>
                <ul>
                    <li>Unlimited Transaction</li>
                    <li>5% Cash Back</li>
                    <li>Unlimited Spending</li>
                </ul>
                <Button class="btn primary">Choose Plan</Button>
            </div>
        </a>
	               <a href="/" class="pricing-card">
            <div>
 <img class='imgcheck' src="https://bandobot.xyz/img/image.png" alt="BandoBot Price" width="50" height="50">
                <h3>Premium</h3>
                <h4>$99.99</h4>
                <p>per Month</p>
                <ul>
                    <li>Unlimited Transaction</li>
                    <li>5% Cash Back</li>
                    <li>Unlimited Spending</li>
                </ul>
                <Button class="btn primary">Choose Plan</Button>
            </div>
        </a>
    </section>

    
    
<!-- services -->
	<div class="services-box">
		<h1 class="services-t" id="services">We currently services...</h1>
		<div class="container">
			<div class="services">
				<div class="service">
					<span><i class="fas fa-server"></i> ${guilds} servers</span>
				</div>
				<div class="service">
					<span><i class="fas fa-users"></i> ${users} users</span>
				</div>
				<div class="service">
					<span><i class="fas fa-hashtag"></i> ${channels} channels</span>
				</div>
			</div>
		</div>
	</div>
	<!-- services end -->

	<!-- footer -->
	<div class="footer">
		<div class="container">
			<div class="footer-items">
				<div class="footer-item">
					<span>Partners</span>
					<ul class="footer-ul">
						<li><a href="#">Partner 1</a></li>
						<li><a href="#">Partner 2</a></li>
						<li><a href="#">Partner 3</a></li>
						<li><a href="#">Partner 4</a></li>
						<li><a href="#">Partner 5</a></li>
					</ul>
				</div>				
				<div class="footer-item">
					<span>Socmed</span>
					<ul class="footer-ul">
						<li><a href="#">Discord</a></li>
						<li><a href="#">Facebook</a></li>
						<li><a href="#">Instagram</a></li>
						<li><a href="#">Twitter</a></li>
						<li><a href="#">Youtube</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- footer end -->

	<script type="text/javascript" src="./js/script.js"></script>
</body>
</html>
`

	res.send(htmlCode)
});

app.get('/hey', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
console.log('test123')
});

app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));

// // Example endpoint to fetch data from GitHub

const redirectURLs = {
  '/commands': 'commands.html',
  '/premium': 'premium.html',
  '/dashboard': 'dashboard.html',
  // Add more mappings as needed
};

// Define the route to handle redirection if URL matches
app.use((req, res, next) => {
  const redirectPath = redirectURLs[req.url];
  if (redirectPath) {
    res.redirect(301, path.join('/', redirectPath));
  } else {
    next(); // Move to the next middleware if no redirect is defined
  }
});

app.use(express.static(path.join(__dirname, 'public')));

const options = {
  cert: fs.readFileSync('./ssl/bandobot_xyz.crt','utf8'),
  ca: fs.readFileSync('./ssl/bandobot_xyz.ca-bundle','utf8'),
  key: fs.readFileSync('./ssl/bandobot.key','utf8')
};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

httpServer.listen(PORT);
//httpsServer.listen(PORT);





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







