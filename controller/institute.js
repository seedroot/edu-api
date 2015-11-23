var institute = require('./../model/institute');

exports.getAllInstitutes = function (req, res) {
	institute.getAllInstitutes()
		.then(function (data) {
			res.status(200).json(data);
		})
		.catch(function (err) {
			res.status(422).json(err);
		});
}

exports.getInstitute = function (req, res) {
	var id = req.params.id;

	institute.getInstitute(id)
		.then(function (data) {
			res.status(200).json(data);
		})
		.catch(function (err) {
			res.status(422).json(err);
		});
}

exports.create = function (req, res) {
	institute.create(req.body.institute)
		.then(function (data) {
			res.status(200).json(data);
		})
		.catch(function (err) {
			res.status(422).json(err);
		});
}

exports.setStatus = function (req, res) {
	institute.setStatus(req.body)
		.then(function (data) {
			res.status(200).json(data);
		})
		.catch(function (err) {
			res.status(422).json(err);
		});
}