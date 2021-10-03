module.exports = app => {
	const Discord = require("discord.js");
	const fs = require("fs");

	const Database = require("@replit/database");
	const db = new Database();

	const prefix = process.env.DEF_PREFIX;

	const client = new Discord.Client({
		intents: 32767
	});

	client.commands = new Discord.Collection();

	fs.readdirSync("./commands/")
		.filter(file => 
			file.endsWith(".ts")
		)
		.forEach(file => {
			const cmd = require(`./commands/${file}`);
			console.log(`Command ${cmd.name} loaded.`);
			client.commands.set(cmd.name, cmd);
	});

	client.on("ready", () => console.log("Online"));

	client.on("messageCreate", async message => {
		if(message.channel.type === "dm") return;
		if(message.author.bot) return;
		if(!message.content.startsWith(prefix)) return;

		const args = message.content.substring(prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();

		const cmd = client.commands.find(c => c === command);
	
		if(!cmd) return message.reply(`Command \`${command}\` is not a valid command!`);

		cmd.callback(message, args, client, Discord);
	});

	client.login(process.env.DISCORD_BOT_TOKEN);
};