(function($){

	var sections = [];
	var $navbar = $('.navbar-nav');
	var $navbara = $('a', $navbar);
	var id = false;

	$navbara.click(function(e) {
		e.preventDefault();
		$("html").animate({
			scrollTop: $($(this).attr("href")).offset().top - $(".navbar").height()
		});
		hash($(this).attr("href"));
	});

	$navbara.each(function() {
		sections.push($($(this).attr('href')));
	});

	$(window).scroll(function() {
		var currentScroll = $(this).scrollTop() + ($(window).height() / 2);
		for (var i in sections) 
		{
			var section = sections[i];
			if (currentScroll > section.offset().top)
			{
				currentSectionId = section.attr('id');
			}
		}
		if (currentSectionId != id)
		{
			id = currentSectionId;
			$navbara.removeClass('current');
			$("a[href=#" + currentSectionId + "]", $navbar).addClass("current");
		}

	});

	$('#bxslider').bxSlider({
		mode: 'horizontal',
		captions: true,
		adaptiveHeight: true,
		useCSS: false,
  		hideControlOnEnd: true,
  		easing: 'easeOutCirc',
  		speed: 1000
	});

}) (jQuery);


hash = function(h) {
	if (history.pushState)
	{
		history.pushState(null,null,h)	
	}
	else
	{
		location.hash = h;
	}
}
