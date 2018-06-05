const moment = require("moment");
require("moment-duration-format");
exports.run = (client, message, params) => {
	const args = params.join(" ");
	if (!args) {
		message.channel.send("Please specify a user!");
		return;
	}
	const member = message.mentions.members.first() || message.guild.members.get(args[0]);
	const reason = args.split(`<@${member.id}> `).join(" ");
	if (!args) {
		message.channel.send("Please specify a user!");
	} else if (!message.member.hasPermission("BAN")) {
		message.channel.send("It seems you're not allowed to ban users!");
		return;
	} else if (member.bannable === false) {
		message.channel.send(`I'm sorry, but **${member.user.tag}** is not able to be banned!`);
	} else {
		message.channel.send({
			embed: {
				title: `${member.user.tag} was banned!`,
				color: 2197497,
				description: `Reason: ${ "**The ban hammer has spoken!**"
					? `**${reason}**`
					: true}\nTime Banned: **${moment.utc(Date.now()).format("dddd, MMMM Do YYYY, HH:mm:ss")}**`
			}
		});
		member.ban(reason);
	}
};

exports.info = {
	name: "ban",
	desc: "Ban a member from the guild"
};
