/*==============================
=            IsTuto            =
==============================*/

var IsTuto = (function ($) { 
	var self = {};

	/*==========  Private Attributes  ==========*/
	
	var _message = "";

	/*==========  Public Attributes  ==========*/

	//

	/*==========  Private Methods  ==========*/

	var integer = function() {
		_message += "-> INTEGER\n";
		_message += '\t47 is integer : ' + is.integer(47) + "\n";
		_message += '\t"sdcsdc" is integer : ' + is.integer("sdcsdc") + "\n";
	};

	var odd = function() {
		_message += "-> ODD\n";
		_message += '\tis.odd(47) : ' + is.odd(47) + "\n";
		_message += '\tis.not.odd(47) : ' + is.not.odd(47) + "\n";
		_message += '\tis.all.odd([47, 48, 49]) : ' + is.all.odd([47, 48, 49]) + "\n";
		_message += '\tis.any.odd([47, 48, 49]) : ' + is.any.odd([47, 48, 49]) + "\n";
	};

	var object = function() {
		_message += "-> OBJECT\n";
		_message += "\tis.propertyCount({this: 'is', 'sample': object}, 2) : " + is.propertyCount({this: 'is', 'sample': 'object'}, 2) + "\n";
	};	

	/*==========  Public Methods  ==========*/

	self.Run = function() {
		self.Test();
		self.AlertMessage();
	};

	self.Test = function () {
		_message += "C'est parti pour les tests : \n";
		integer();
		odd();
		object();
	};
	
	self.AlertMessage = function () {
		console.log("%c-- Bienvenue dans mon super module ! --\n", 'background: #474789; color: #EEE;font-size : 18px;');
		console.log(_message);
	};

	return self;

})(jQuery);


/*-----  End of IsTuto  ------*/
