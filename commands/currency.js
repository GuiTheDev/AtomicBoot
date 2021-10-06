const convert = require("crypto-convert");
const axios = require('axios')
module.exports = {
    name: "currency",
    aliases: ["cur"],
    permissions: [],
    description: "Currencys and Cripto infos!",
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        const curId = args[0].toLowerCase();
        const toCur = args[1]
        if(!curId) return message.channel.send('Please give a valid currency(Bitcoin/ethereum, etc...');

        
        axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${curId}`)
            .then((res) => {
                console.log('RES: ', res.data)
                if(!res.data[0]) return message.channel.send('Invalid crypto name!')
                console.log(res)

                const curEmbed = new MessageEmbed()
                .setColor('GREEN')
                .setTitle(`${curId.toUpperCase()} info`)
                .addFields(
                    { name: 'Name: ', value: `${curId.toUpperCase()}`},
                    { name: `${curId.toUpperCase()}`, value: `1 ${curId.toUpperCase()} its equal to ${res.data[0].current_price} $`}
                )
                .setFooter('💰 Work to pay the bills!')
                message.channel.send({ embeds:[curEmbed]});
            })
            .catch((err) => {
                console.error(err)
            })

    
    }   

}
