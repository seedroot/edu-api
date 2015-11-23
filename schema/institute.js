require('./connect.js');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var instituteSchema = new Schema({
	institute_id: { type: String, required: true, unique: true },
	institute_name: { type: String, unique: true },
	institute_type: { type: String },
	email: { type: String, unique: true },
	country: String,
	address: {
		line1: String,
		line2: String
	},
	contact_no: String,
	city: String,
	state: String,
	pincode: String,
	website: String,
	total_students: String,
	total_staff: String,
	is_approved: Boolean,
	approved_by: String,
	approval_date: Date,
	created_at: Date,
	updated_at: Date,
	is_deleted: Boolean,
	deleted_dt: Date
});

// on every save, add the date
instituteSchema.pre('save', function(next) {
	var obj = this;
	// get the current date
	var currentDate = new Date();

	// change the updated_at field to current date
	obj.updated_at = currentDate;
	/*obj.is_deleted = false;
	obj.deleted_dt = null;*/

	// if created_at doesn't exist, add to that field
	if (!obj.created_at){
		obj.created_at = currentDate;
	}

	//insert default values
	/*obj.is_approved = false;
	obj.approved_by = null;
	obj.approval_date = null;*/

	next();
});

var institute = mongoose.model('institute', instituteSchema);

module.exports = institute;