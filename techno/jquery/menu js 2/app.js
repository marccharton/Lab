$(document).ready(function(){

	$(".subMenu").hide();

	$(".navigation .toggleSubMenu span").each(function(){
		$(this).replaceWith("<a href='#'> "+ $(this).text() +"</a>");
	});
	
	
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