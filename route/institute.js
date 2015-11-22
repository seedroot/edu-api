var institute = require('./../controllers/institute');

module.exports = function (app) {
	app.route('/institute')
		.get(institute.getAllInstitutes)
		.post(institute.create);

	// for a specific institute
	app.route('/institute/:id')
		.get(institute.getInstitute);

	// // auth routes
	// app.route('/auth/login')
	// 	.post(institute.login);

	// app.route('/auth/forgot')
	// 	.post(institute.forgot);

	// app.route('/auth/signup')
	// 	.post(institute.signup);
};