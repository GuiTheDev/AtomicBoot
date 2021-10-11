const Discord = { Client, Intents, DiscordAPIError } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_VOICE_STATES] });
const prefix = '-';
const { Player } = require('discord-player');
const AntiSpam = require('discord-anti-spam');
require('dotenv').config({ path: '.env' });

const mongoose = require("mongoose");

client.commands = new Discord.Collection();
client.events = new Discord.Collection();


['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.once('ready', () => {
    client.user.setActivity('Your reviews', { type: 'LISTENING'});
})

const antiSpam = new AntiSpam({
    warnThreshold: 5, // Amount of messages sent in a row that will cause a warning.
    muteThreshold: 8, // Amount of messages sent in a row that will cause a mute
    kickThreshold: 1000000000, // Amount of messages sent in a row that will cause a kick.
    banThreshold: 10000000000000, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 2000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    muteMessage: '**{user_tag}** has been muted for spamming.',// Message that will be sent in chat upon muting a user.
    banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 100000, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 1000000, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesMute: 12, // Ammount of duplicate message that trigger a mute.
    ignoredPermissions: [], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredMembers: [], // Array of User IDs that get ignored.
    muteRoleName: "Muted", // Name of the role that will be given to muted users!
    removeMessages: true // If the bot should remove all the spam messages when taking action on a user!
    // And many more options... See the documentation.
});

client.on('message', (message) => antiSpam.message(message)); 

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected to the database!')
}).catch((err) => {
    console.log(err);
});

require('./dashboard/server');

client.login(process.env.DISCORD_TOKEN);