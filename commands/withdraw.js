const profileModel = require("../models/profileSchema");

module.exports = {
    name: "withdraw",
    aliases: ["wd"],
    permissions: [],
    description: "Withdraw coins from ur bank!",
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        const amount = args[0];
        if(amount % 1 != 0 || amount <= 0) return message.channel.send('Withdraw amount must be a whole and positive number!');
        try{
            if(amount > profileData.OB$) return message.channel.send('You dont have that amount of coins in ur bank!')
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            },
            {
                $inc: {
                    OB$:  amount,
                    bank: - amount,
                }
            })

            return message.channel.send(`You have withdrawn **${amount}** of ur bank, and ur current bank balance is **${profileData.OB$}**`)
        }catch(err){
            console.log(err)
        }
    }
};