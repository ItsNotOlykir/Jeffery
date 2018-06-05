module.exports = client => {
	console.log("I'm Online!");
	client.user.setActivity(`-help || ${client.users.size - 1} users!`);
	setInterval(function() {
		const RainbowRole = client.guilds
			.get("452370435498311691")
			.roles.get("452721663990038528");
		RainbowRole.setColor(Math.floor(Math.random() * 16777215));
	}, 8000);
};
