const { MessageEmbed, Channel } = require("discord.js");
const profileModel = require("../models/profileSchema");
module.exports = {
    name : 'work',
    aliases: [],
    cooldown: 1200,
    description: "work to get coins",
    permissions: [],
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        const rand = Math.floor(Math.random() * 16000) + 1;
        const response = await profileModel.findOneAndUpdate(
        {
            userID: message.author.id,

            $inc: {
                OB$: rand,
            }
        },
        )

        const workEmbed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle(`${message.author.username}'s work`)
        .addFields(
            { name: 'You won:', value: `${rand} OB$`},
            { name: 'You now have:', value: `${profileData.OB$} OB$`}
        )
        .setFooter('💰 Work to pay the bills!')
         message.channel.send({ embeds:[workEmbed]});
    }
}