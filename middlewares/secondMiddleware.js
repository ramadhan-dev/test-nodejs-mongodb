exports.secondMiddleware = (req, res, next) => {
	console.log("second middleware worked")
	next()
}
