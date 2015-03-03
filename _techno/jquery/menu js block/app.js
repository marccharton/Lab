$(document).ready(function(){



	$(".navigation .toggleSubMenu span").each(function(){
		$(this).replaceWith("<a href='#'> "+ $(this).text() +"</a>");
	});
	
	$(".navigation .toggleSubMenu .subMenu").each(function(){
		var content = "";

		for (var i = 0 ; i < 100 ; i++) {
			content += "<li><a href='#''>Page "+ i +"</a></li>\n";
		}

		$(this).replaceWith("<ul class='subMenu'>"+content+"</ul>");
	});

		$(".subMenu").hide();
	
	$(".navigation .toggleSubMenu > a").click(function(){
		if ($(this).next("ul.subMenu").is(":visible"))
		{
			$(this).next("ul.subMenu").slideUp(400, function() {
				$(this).parent().removeClass("open");
			});
		}
		else
		{
			$(".navigation ul.subMenu").slideUp(400, function(){
				$(this).parent().addClass("open");
			});

			$(this).next("ul.subMenu").slideDown(300, function(){
				$(this).parent().addClass("open");
			});
		}
	});
		
});