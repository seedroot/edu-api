var when = require('when');

var institute = require('./../schema/institute');

exports.getAllInstitutes = function () {
	var deferred = when.defer();

	institute.find({}, function (err, result) {
		if(err){
			deferred.reject(err);
		}else{
			deferred.resolve(result);
		}
	});

	return deferred.promise;
}

exports.getInstitute = function (id) {
	var deferred = when.defer();

	institute.find({institute_id: id}, function (result) {
		if(err){
			deferred.reject(err);
		}else{
			deferred.resolve(result);
		}
	});

	return deferred.promise;
}

exports.create = function (_institute) {
	var deferred = when.defer();
	var inst = new institute(_institute);

	inst.save(function (err, data) {
		if(err){
			deferred.reject(err);
		}else{
			deferred.resolve(data);
		}
	});

	return deferred.promise;
}

exports.setStatus = function (_institute) {
	var deferred = when.defer();

	institute.findOne({institute_id: _institute.id}, function (result) {
		result.is_approved = _institute.is_approved;
		result.approved_by = _institute.approved_by;
		result.approval_date = new Date();

		result.save(function (err, data) {
			if(err){
				deferred.reject(err);
			}else{
				deferred.resolve(data);
			}
		});
	});

	return deferred.promise;
}