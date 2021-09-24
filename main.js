const Discord = { Client, Intents, DiscordAPIError } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const prefix = '-';
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


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(message.content === "hello"){
        message.reply('Hey!')
    }
})




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