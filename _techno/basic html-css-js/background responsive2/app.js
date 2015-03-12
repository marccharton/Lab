function HeightBackground () {
	var height = $(window).height();
	$("#cover").css({
		'height':height
	});
}

function ShrinkNavbar() {
	$(window).scroll(function () {
		var height = $(window).height();
		if ($(window).scrollTop() > height - 400)
		{
			$("#navbar").removeClass('full');
			$("#navbar").addClass('shrink');
		} 
		else
		{
			$("#navbar").removeClass('shrink');
			$("#navbar").addClass('full');
		}
	});
}

$(document).ready(function () {
	HeightBackground();
	$(window).resize(function () {
		HeightBackground();
	});
	$(window).scroll(function () {
		ShrinkNavbar();
	});
});


