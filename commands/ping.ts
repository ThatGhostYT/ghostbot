module.exports = {
	name: "ping",
	description: "Shows ping of the bot!",
	callback(message, args, client, Discord){
		message.reply(`Pong!\nPing ${client.ws.ping} ms.`);
	}
}