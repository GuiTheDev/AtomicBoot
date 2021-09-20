const profileModel = require('../../models/profileSchema');

module.exports = async(client, discord, member) =>{
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        OB$: 25,
        bank: 0,
    });
    profile.save()
};