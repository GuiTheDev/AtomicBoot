const axios = require('axios');
require('dotenv').config({ path: '.env' });

module.exports = {
    name: "currency",
    aliases: ["cur"],
    permissions: [],
    description: "Currencys and Cripto infos!",
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        const curId = args[0]
        const curConv = args[1]
        if(!curId) return message.channel.send('Please give a valid currency(Btc, Eth, etc.. !');
        if(!curConv) return message.channel.send('Please send what currency(Eur, Dollar, etc...) you want it to be in')
        axios.get("https://api.nomics.com/v1/prices?key=" + process.env.NOMIC_API_KEY + '&ids=' + curId.toUpperCase() + '&convert' + curConv.toUpperCase())
            .then(resp => {
            console.log(resp.data[0]);
            })
            .catch(err => {
            console.log("Error fetching data from nomics", err);
            });

    
    }   

}
