// module module
define('init_module', [
	'jquery',
	'module1'
], function($, module1) {

	// private scope
	console.log('init loaded');

	console.log(module1.nombre);
	module1.nombre_plus();
	console.log(module1.nombre);

	return module1;
});

require(['init_module'], function(module1) {
	// public scope
	console.log(module1.nombre);
});