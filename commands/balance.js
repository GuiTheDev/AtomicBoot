module.exports = {
    name : 'balance',
    aliases: ["bal", "bl"],
    description: "Check ur balance",
    permissions: [],
    execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        const balEmbed = new MessageEmbed()
        .setColor('#1b1c1c')
        .setTitle(`${message.author.username}'s balance `)
        .addFields(
            { name: 'Wallet:', value: `${profileData.OB$} OB$`},
            { name: 'Bank:', value: `${profileData.bank} OB$`}
        )
        .setFooter('💸 Check ur balance!')
         message.channel.send({ embeds:[balEmbed]});
}

};
    