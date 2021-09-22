const profileModel = require("../models/profileSchema");

module.exports = {
    name: "give",
    aliases: [],
    permissions: [],
    description: "Admin command to give money to a user!",
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        if(!message.author.id == 535952303702671393) return message.channel.send('You dont have permission to use this command!');

        if(!args.length) return message.channel.send('You need to mention a user to give them money!');
        const amount = args[1]
        const target = message.mentions.users.first();
        if(!target) return message.channel.send('That user does not exist');       

        if (amount % 1 != 0 || amount <= 0) return message.channel.send('You must give them a whole positive amount!');

        try {
            const targetData = await profileModel.findOne({ userID: target.id });
            if(!targetData) return message.channel.send('That user doesnt exist!');

                await profileModel.findOneAndUpdate({
                    userID : target.id,
                },
                {
                    $inc : {
                        OB$: amount,
                    },
                }
                );
                
                
                return message.channel.send(`The user ${target.username} has received ${amount} OB$ !`);
        } catch(err){
            console.log(err)
        }
    },
};