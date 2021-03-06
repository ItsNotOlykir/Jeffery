module.exports = message => {
	// Define client
	const client = message.client;
	// Check who, and the prefix being used
	if (message.author.id === "452255697032183819") return;
	if (!message.content.startsWith(client.settings.prefix)) return;
	// Define command
	const command = message.content
		.split(" ")[0]
		.slice(client.settings.prefix.length)
		.toLowerCase();
	// Define command paramaters
	const params = message.content.split(" ").slice(1);
	let cmd;
	if (client.commands.has(command)) {
		cmd = client.commands.get(command);
	}
	// If command, run that command
	if (cmd) {
		cmd.run(client, message, params);
	}
};
