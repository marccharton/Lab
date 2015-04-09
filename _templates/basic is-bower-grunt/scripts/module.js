/*==============================
=            MODULE            =
==============================*/

var MODULE = (function ($) {
	var self = {};
	
	/*==========  Private Attributes  ==========*/
	
	var _message = "";

	/*==========  Public Attributes  ==========*/

	// attr

	/*==========  Private Methods  ==========*/

	// methods	

	/*==========  Public Methods  ==========*/

	self.Init = function() {
		_message += "mon module ne fait rien du tout pour l'instant";
		self.AlertMessage();
	};

	self.AlertMessage = function () {

		console.log("%c -- Bienvenue dans mon super module : 'MODULE' ! --\n", 'background: #474789; color: #EEE;font-size : 18px;');
		console.log(_message);
		alert(_message);

	};

	return self;

})(jQuery);

/*-----  End of MODULE  ------*/