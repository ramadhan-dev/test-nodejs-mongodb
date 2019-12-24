exports.createPost = (req, res, next) => {
	//title
	req.check("title", "Write a title").notEmpty()
	req.check("title", "Title must between 4 to 150 character").isLength({
		min: 4,
		max: 150
	})

	// body
	req.check("body", "Write a body").notEmpty()
	req.check("body", "Body must between 4 to 2000 character").isLength({
		min: 4,
		max: 2000
	})

	// check error
	const errors = req.validationErrors()
	if (errors) {
		const error = errors.map(error => {
			return {
				[error.param]: error.msg
			}
		})
		return res.status(200).json({
			error: error
		})
	}
	next()
}