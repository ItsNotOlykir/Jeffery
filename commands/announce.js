exports.run = (client, message, params) => {
	if (!message.member.hasPermission("PIN_MESSAGES")) {
		message.channel.send("You cannot use this command!");
	} else {
		const messageText = params.join(" ");
		message.delete()
		message.channel.send(`Annoucment:\n**${messageText}**`).then(p => p.pin());
	}
}
exports.info = {
	name: "announce",
	desc: "Annouce something to the server",
	use: `-announce \"message\"`
}
