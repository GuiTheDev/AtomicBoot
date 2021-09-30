const profileModel = require("../models/profileSchema");

module.exports = {
    name : 'balance',
    category: 'Economy',
    aliases: ["bal", "bl"],
    description: "Check ur balance",
    permissions: [],
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
        if(!profileData) return message.reply('Looks like this is your first time, you need to run the command again!');
        
        try {
            const balEmbed = new MessageEmbed()
            .setColor('#1b1c1c')
            .setTitle(`${message.author.username}'s balance `)
            .addFields(
                { name: 'Wallet:', value: `${profileData.OB$} OB$`},
                { name: 'Bank:', value: `${profileData.bank} OB$`}
            )
            .setFooter('💸 Check ur balance!')
            message.channel.send({ embeds:[balEmbed]});
        } catch(err){
            console.log(err)
        }

    }
};
