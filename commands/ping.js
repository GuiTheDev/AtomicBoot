module.exports = {
    name : 'ping',
    description: "Ping Command!",
    execute(client, message, args, Discord) {
        console.log("Started command")
        console.log('Executed');
        message.channel.send(`🏓 Pong! Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
        console.log("Message sent");



    }
}