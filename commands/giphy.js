const snek = require('snekfetch')
exports.run = (client, message, params) => {
	const search = params.join("+")
	snek.get(`http://api.giphy.com/v1/stickers/search?q=${search}&api_key=${client.settings.giphyKey}`)
		.then(r => message.channel.send({
			embed: {
				title: `Success!`,
				image: {
					url: `${r.body.data[0].images.preview_gif.url}`
				}
			}
		}));
}

exports.info = {
	name: "giphy",
	desc: 'Search giphy',
	use: '-giphy \'search\''
}
