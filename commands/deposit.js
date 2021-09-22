const profileModel = require("../models/profileSchema");

module.exports = {
    name: "deposit",
    aliases: ["dep"],
    permissions: [],
    description: "Deposit your coins in ur bank!",
    async execute(client, message, args, cmd, Discord, profileData, MessageEmbed) {
        const amount = args[0];
        if(amount % 1 != 0 || amount <= 0) return message.channel.send('Deposit amount must be a whole and positive number!');
        try{
            if(amount > profileData.OB$) return message.channel.send('You dont have that amount of coins!')
            await profileModel.findOneAndUpdate({
                userID: message.author.id
            },{
                $inc: {
                    OB$: - amount,
                    bank: amount,
                }
            })

            return message.channel.send(`You deposited **${amount}** and ur current bank balance is **${profileData.OB$}**`)
        }catch(err){
            console.log(err)
        }
    }
};