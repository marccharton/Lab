// création des alias/paths
require.config({
	paths: {
		jquery: 'libs/jquery/jquery.min',
		module1: 'module/module1'
	}
});

// module commun à tout le site
define('common', [
	'jquery'
], function($) {
	console.log('boot loaded ');
});

// on charge le module commun
require(['common']);