module.exports = app => {
	const Discord = require("discord.js");
	const fs = require("fs");
	const prefix = process.env.DEF_PREFIX;

	const client = new Discord.Client({
		intents: 32767
	});

	client.on("ready", () => console.log("Online"));

	client.on("messageCreate", message => {
		
	});

	client.login(process.env.DISCORD_BOT_TOKEN);
};