const Register = require("./../models/register")

exports.store = (req, res) => {
	const register = new Register(req.body)
	register.save( (err, result) => {
		if (err) {
			return res.status(400).json({
				error: err
			})
		}
		res.status(200).json({
			message: result
		})
	})
}
