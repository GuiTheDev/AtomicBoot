const axios = require('axios');

module.exports = {
    name: "cat",
    aliases: [],
    permissions: [],
    description: "A cat Picture!",
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        axios.get('https://api.thecatapi.com/v1/images/search')
            .then((res) => {
                console.log('RES: ', message.reply(res.data[0].url))
            })
            .catch((err) => {
                console.error('err')
            })



    }
}