const axios = require('axios');

module.exports = {
    name: "monkey",
    aliases: ["monke", "mk"],
    permissions: [],
    description: "A monkey Picture!",
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        axios.get("https://www.placemonkeys.com/500/350?random=2")
            .then((res) => {
                console.log('RES: ', message.reply(res.data[0]))
            })
            .catch((err) => {
                console.error('err')
            })
    }
}