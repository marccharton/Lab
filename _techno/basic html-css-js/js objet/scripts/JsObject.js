/*==============================
=            JsObject            =
==============================*/

var JsObject = (function ($) {
	var self = {};
	
	/*==========  Private Attributes  ==========*/
	
	var _message = "";

	/*==========  Public Attributes  ==========*/

	// attr

	/*==========  Private Methods  ==========*/

	// methods	

	/*==========  Public Methods  ==========*/

	self.Init = function() {
		
		var Animal = {
			cri : '????',
			crer : function () {
				return this.cri;
			},
			fourure : {
				couleur : "blanc",
				longueur : 'court'
			}

		};

	};

	self.AlertMessage = function () {

	};

	return self;

})(jQuery);

/*-----  End of JsObject  ------*/