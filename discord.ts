module.exports = app => {
	const Discord = require("discord.js");
	const fs = require("fs");

	const client = new Discord.Client({
		intents: 32767
	});

	const files = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
	client.commands = new Discord.Collection();

	for(const file of files){
		const cmd = require(`./commands/${file}`);
		client.commands.set(cmd.name, cmd);
	}

	client.on("ready", () => console.log("Online"));

	client.login(process.env.DISCORD_BOT_TOKEN);
};