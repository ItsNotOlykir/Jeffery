const Discord = require("discord.js");
exports.run = (client, message, params) => {
	const commandNames = Array.from(client.commands.keys())
	const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	const args = params[0]
	const command = client.commands.get(args).info
	if (args) {

		if (command === undefined) {
			message.channel.send({
				embed: {
					title: 'Command not found!',
					color: 2197497
				}
			})
		} else {
			message.channel.send({
				embed: {
					title: `Info for **${command.name}**.`,
					color: 2197497,
					description: `Description: **${command.desc}**\nUsage: **${command.use}**`
				}
			})
		}

		return
	}
	message.channel.send({
		embed: {
			title: "Commands!",
			url: client.supportServer,
			color: 2197497,
			description: `${client.commands.map(c => `**${client.settings.prefix}${c.info.name}**${ " ".repeat(longest - c.info.name.length)}   || ${c.info.desc}`).join("\n")}`
		}
	})

};

exports.info = {
	name: "help",
	desc: "Get the bots commands!"
};
