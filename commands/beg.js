const profileModel = require("../models/profileSchema");
module.exports = {
    name : 'beg',
    aliases: [],
    description: "beg for coins",
    permissions: [],
    async execute(client, message, args, Discord, profileData) {
        const rand = Math.floor(Math.random() * 40) + 1;
        const response = await profileModel.findOneAndUpdate(
       {
            userID: message.author.id,
        },
        )

        var beat = false

        if(rand == 4){
            beat = true
        }

        if(beat == true) {
            message.channel.send(`@${message.author.username}, U were beaten while begging!`);
        }
        else {
            const response = await profileModel.findOneAndUpdate(
                {
                    $inc: {
                        OB$: rand,
                    }
                }
            )
            return message.channel.send(`@${message.author.username}, U received **${rand}** OB$ while begging, and now u have **${profileData.OB$}** OB$!`);
        }

    },
};