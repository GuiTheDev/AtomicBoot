const axios = require('axios');

module.exports = {
    name: "dog",
    aliases: [],
    permissions: [],
    description: "A dog Picture!",
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        axios.get('https://api.thedogapi.com/v1/images/search')
            .then((res) => {
                console.log('RES: ', message.reply(res.data[0].url))
            })
            .catch((err) => {
                console.error('err')
            })



    }
}