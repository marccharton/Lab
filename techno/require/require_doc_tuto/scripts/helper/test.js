define('test', [], function () {
	
	var test =  function () {
		var _name = 'test name';

		this.getName = function () {
			return _name;
		}
	};

	return test;
});