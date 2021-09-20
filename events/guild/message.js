const { MessageEmbed } = require("discord.js");
const profileModel = require("../../models/profileSchema");
const cooldowns = new Map();

module.exports = async (Discord, client, message) => {
    const prefix = '-';


    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let profileData;
    try {
        profileData = await profileModel.findOne({ UserID: message.author.id });
        if(!profileData){
           let profile = await profileModel.create({
            userID: message.author.id,
            serverID: message.guild.id,
            OB$: 25,
            bank: 0,
           });
           profile.save();
          };
    } catch (err) {
        console.log(err);
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) ||
                    client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if(time_stamps.has(message.author.id)){
        const expire_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expire_time) {
            const time_left = (expire_time - current_time) / 1000;

            if(time_left < 219){
                return message.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name} again!`);
            }
            if(time_left > 220){
                const time_leftM = (time_left / 60);
                return  message.reply(`Please wait ${time_leftM.toFixed(1)} more minutes before using ${command.name} again!`);
            }
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    if(command) command.execute(client, message, args, cmd, Discord, profileData, MessageEmbed);
}