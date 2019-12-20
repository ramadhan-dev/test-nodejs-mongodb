const getBlog = (req, res) => {
	res.json({
		blogs: [
			{title: 'first blog'},
			{title: 'second blog'}
		]
		})	
}

module.exports = {
	getBlog
}
