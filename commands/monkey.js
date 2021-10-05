const axios = require('axios');

module.exports = {
    name: "monkey",
    aliases: ["monke", "mk"],
    permissions: [],
    description: "A monkey Picture!",
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        message.channel.send("https://www.placemonkeys.com/500/350?random=2")
    }
}