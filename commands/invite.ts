const Command = require("../Command.ts");

module.exports = new Command({
	name: "invite",
	description: "Sends bot invite link.",
	callback(message, args, client, Discord){
		message.reply(`[**Click this to invite me!**](${process.env.INV_LINK})`);
	}
});