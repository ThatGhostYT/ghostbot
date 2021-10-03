const Discord = require("discord.js");

interface CommandOptions{
	name: string;
	description: string;
	callback(message: Discord.Message, args: string[], client: Discord.Client, Discord: Discord);
}

module.exports = class Command{
	name: string;
	description: string;
	callback(message: Discord.Message, args: string[], client: Discord.Client, Discord: Discord);
	
	constructor(options: CommandOptions){
		this.name = options.name;
		this.description = options.description;
		this.callback = options.callback;
	}
}