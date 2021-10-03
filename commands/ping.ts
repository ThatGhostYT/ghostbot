const Command = require("../Command.ts");

module.exports = new Command({
	name: "ping",
	description: "Shows ping of the bot!",
	callback: async (message, args, client, Discord){
		message.reply(`Pong!\nPing ${client.ws.ping} ms.`);
	}
});