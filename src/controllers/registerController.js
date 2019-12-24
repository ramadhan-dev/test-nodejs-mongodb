const Register = require("./../models/register");

exports.store = (req, res) => {
	const register = new Register(req.body);
	console.log(register);

	// register.save((err, result) => {
	// 	if (err) {
	// 		return res.status(400).json({
	// 			error: err
	// 		})
	// 	}
	// 	res.status(200).json({
	// 		message: result
	// 	})
	// })
};

// exports.getUsername = async (username) => {
// 	const query = {
// 		username: username
// 	}
// 	try {
// 		return await Register.find(query);
// 	} catch (err) {
// 		throw (err);
// 	}
// };


exports.getUsername = (username) => {
	const query = {
		username: username
	}
	return Register.find(query, (err, obj) => {
		var data;
		if (obj.length > 1) {
			return data = obj;
		}
	})
};