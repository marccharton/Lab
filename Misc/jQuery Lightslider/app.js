$(document).ready(function() {
    $('#imageGallery').lightSlider({
		slideWidth:400,
		slideMargin:0,
		slideMove:1,
		minSlide:1,
		maxSlide:8,
		pager:true,
		controls:true,
		prevHtml:'',
		nextHtml:'',
		keyPress:true,
		thumbWidth:50,
		thumbMargin:1,
		gallery:true,
		currentPagerPosition:'middle',
		useCSS:false,
		auto: true,
		pause: 1000,
		loop:true,
		easing: '',
		speed: 500,
		mode: 'slide',
		swipeThreshold:10
	}); 
});