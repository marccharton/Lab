/*===========================
=            App            =
===========================*/

var App = (function ($) {

	var self = {};

	self.Init = function () {

		console.log(cch.about);

		cch.print("ouech les amis je suis normal");

		cch.title("ouech les amis je suis un header H1", 1);
		cch.title("ouech les amis je suis un header H2", 2);
		cch.title("ouech les amis je suis un header H3", 3);
		cch.title("ouech les amis je suis un header H4", 4);
		cch.title("ouech les amis je suis un header H5", 5);
		cch.title("ouech les amis je suis un header H6", 6);
		
		cch.log({"This": "is", "An" : "Object"});
		cch.table([[1,2,3], [2,3,4]]);


		var table = [
			["salut","les","copains"], 
			["ouech","tout","le", "monde"]
		];

		cch.table(table);

	};

	self.Readme = function () {
		cch.clear();

		cch.title("ChromeConsoleHelper.js");
		cch.print("ChromeConsoleHelper.js est un utilitaire pour embellir vos messages dans la console chrome.");
		cch.print("A noter qu'il n'est compatible qu'avec chrome pour l'instant et c'est déjà pas mal !");

		cch.title("About", 2);

	};	



	return self;

})(jQuery);

/*-----  End of App  ------*/