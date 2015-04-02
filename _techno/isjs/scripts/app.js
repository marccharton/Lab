(function ($) {

	var app = {
		'IsTuto' : IsTuto
	};

	app.IsTuto.Run();

	console.log(cch.about);



	cch.Print("ouech les amis je suis normal");

	cch.H1("ouech les amis je suis un header H1");
	cch.H2("ouech les amis je suis un header H2");
	cch.H3("ouech les amis je suis un header H3");
	cch.H4("ouech les amis je suis un header H4");
	cch.H5("ouech les amis je suis un header H5");
	cch.H6("ouech les amis je suis un header H6");
	

	cch.Log({"This": "is", "An" : "Object"});
	cch.Table([[1,2,3], [2,3,4]]);


	var table = [
		["salut","les","copains"], 
		["ouech","tout","le", "monde"]
	]

	cch.Table(table);

})(jQuery);