function HeightBackground () {
	var height = $(window).height();
	$("#cover").css({
		'height':height
	});
}

function ShrinkNavbar(actualScroll) {
	var height = $(window).height();
	if ($(window).scrollTop() > height - 250)
	{
		$("#navbar").removeClass('full');
		$("#navbar").addClass('shrink');
	} 
	else
	{
		$("#navbar").removeClass('shrink');
		$("#navbar").addClass('full');
	}

	console.log("actualScroll = " + actualScroll);
	console.log("$(window).scrollTop() = " + $(window).scrollTop());
	if ($(window).scrollTop() >= actualScroll + 50)
	{
		actualScroll = $(window).scrollTop();
	}
	if ($(window).scrollTop() <= actualScroll - 50)
	{
		actualScroll = $(window).scrollTop();
	}
	
	console.log('$("#accueil").offset() = ');
	console.log($("#accueil").offset().top);
	if (actualScroll > $("#accueil").offset().top - 50)
	{
		$(".navbar-menu a").removeClass('active');
		$("#accueil-link").addClass('active');
	}
	if (actualScroll > $("#biographie").offset().top - 50)
	{
		$(".navbar-menu a").removeClass('active');
		$("#biographie-link").addClass('active');
	}
	if (actualScroll > $("#galerie").offset().top - 50)
	{
		$(".navbar-menu a").removeClass('active');
		$("#galerie-link").addClass('active');
	}
	if (actualScroll > $("#expositions").offset().top - 50)
	{
		$(".navbar-menu a").removeClass('active');
		$("#expositions-link").addClass('active');
	}
	if (actualScroll > $("#contacts").offset().top - 50)
	{
		$(".navbar-menu a").removeClass('active');
		$("#contacts-link").addClass('active');
	}
	

	return actualScroll;
}

$(document).ready(function () {
	HeightBackground();
	$(window).resize(function () {
		HeightBackground();
	});
	var actualScroll = $(window).scrollTop();
	$(window).scroll(function () {
		actualScroll = ShrinkNavbar(actualScroll);
	});

	$('#accueil').parallax("50%", 0.1);
    $('#biographie').parallax("50%", 0.1);
    $('#slide3').parallax("50%", 0.1);
});


