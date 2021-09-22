module.exports = {
    name : 'ping',
    description: "Ping Command!",
    execute(client, message, args, Discord) {
        if(!profileData) return message.reply('Looks like this is your first time, you need to run the command again!');
        console.log("Started command")
        console.log('Executed');
        message.channel.send(`🏓 Pong! Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        console.log("Message sent");



    }
}