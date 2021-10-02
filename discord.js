module.exports = () => {
	const Discord = require("discord.js");
	const client = new Discord.Client();

	client.on("message", message => {
		message.channel.send(message.content);
	});

	client.login(process.env.DISCORD_BOT_TOKEN);
};