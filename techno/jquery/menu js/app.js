$(document).ready(function(){
	$(".navigation ul.subMenu:not('.open_at_load')").hide();

	$(".navigation li.toggleSubMenu span").each(function (){
		$(this).replaceWith('<a href="" title="Afficher sous menu"> ' + $(this).text() + '<\/a>');
	});

	$(".navigation li.toggleSubMenu > a").click(function() {
		if ($(this).next("ul.subMenu:visible").length != 0) {
			$(this).next("ul.subMenu").slideUp("normal", function() {
				$(this).parent().removeClass("open");
			});
		}
		else {
			$(".navigation ul.subMenu").slideUp("normal", function() {
				$(this).parent().removeClass("open");
			});
			$(this).next("ul.subMenu").slideDown("normal", function() {
				$(this).parent().addClass("open");
			});
		}
		return false;
	})
});