(function ($) {
	var container = $('#main-container');

	for (var i = 1; i < 10; i++) {
		var block = "";
		block += '<section class="block">';
			block += '<img src="http://lorempicsum.com/simpsons/250/250/' + i + '">';
			block += '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non quaerat et eaque incidunt, nostrum modi aliquid nisi nesciunt! Accusantium omnis eum earum. Quos, praesentium maiores dolorum aliquam aperiam nihil quo.</p>';
		block += '</section>';
		container.append(block);
	}

})(jQuery);