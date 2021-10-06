const convert = require("crypto-convert");
const axios = require('axios')
module.exports = {
    name: "currency",
    aliases: ["cur"],
    permissions: [],
    description: "Currencys and Cripto infos!",
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        const curId = args[0]
        const toCur = args[1]
        const howM = args[2]
        const curIdu = curId.toUpperCase();
        const toCurU = toCur.toUpperCase();
        if(!curId) return message.channel.send('Please give a valid currency(Btc, Eth, etc.. !');
        if(!toCur) return message.channel.send('Please give a valid currency to convert(Eur, USD, etc...)');
        if(!howM) return message.channel.send('Please give the amount of the currency u want to convert!')
        axios.get(`https://api.coinconvert.net/convert/${curId.toLowerCase()}/${toCur.toLowerCase()}?amount=${howM}`)
            .then((res) => {
                console.log('RES: ', res.data)
                console.log(res.data.status)

                const curEmbed = new MessageEmbed()
                .setColor('GREEN')
                .setTitle(`${curId.toUpperCase()} info`)
                .addFields(
                    { name: 'Name: ', value: `${curId.toUpperCase()}`},
                    { name: 'Price', value: `${howM} ${res.data.BTC} its equal to ${res.data.EUR}`}
                )
                .setFooter('💰 Work to pay the bills!')
                message.channel.send({ embeds:[curEmbed]});
            })
            .catch((err) => {
                console.error(err)
            })

    
    }   

}
