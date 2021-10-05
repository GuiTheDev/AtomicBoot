const axios = require('axios');

module.exports = {
    name: "fakeyt",
    aliases: ["ytf"],
    permissions: [],
    description: "Youtube fake comment generator!",
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        const username = args[0];
        const comment = args[1];
        if(!username) return message.reply('please input a username!');
        if(!comment) return message.reply('please input the comment itself!')
        let avatar = message.author.displayAvatarURL()
        message.reply(`https://some-random-api.ml/canvas/youtube-comment?avatar=${avatar}&username=${username}&comment=${comment}`)

    }
}