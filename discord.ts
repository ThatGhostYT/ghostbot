module.exports = () => {
	const Discord = require("discord.js");
	const intents = new Discord.Intents(32767);

	const client = new Discord.Client({
		intents: intents
	});

	client.login(process.env.DISCORD_BOT_TOKEN);
};