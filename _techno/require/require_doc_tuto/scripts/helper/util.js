define('util', ["test"], function (test) {
	
	var test = new test();

	var util = function () {
		this.getTestName = function () {
			return test.getName();
		}
	};

	return util;
});