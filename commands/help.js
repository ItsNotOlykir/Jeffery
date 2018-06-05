const Discord = require("discord.js");
exports.run = (client, message) => {
	const commandNames = Array.from(client.commands.keys())
	const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	const embed = {
		title: "Commands!",
		url: client.supportServer,
		color: 2197497,
		description: `${client.commands.map(c => `**${client.settings.prefix}${c.info.name}**${ " ".repeat(longest - c.info.name.length)}   || ${c.info.desc}`).join("\n")}`
	};
	message.channel.send({
		embed
	});
};

exports.info = {
	name: "help",
	desc: "Get the bots commands!"
};
