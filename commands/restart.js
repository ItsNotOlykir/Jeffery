exports.run = (client, message) => {
	if (message.author.id !== "365877861397037059") return
	message.channel.send('Restarting!')
	setTimeout(function() {
		process.kill(0)
	}, 2000)
}
exports.info = {
	name: 'restart',
	desc: 'Restart the bot',
	use: '-restart'
}
