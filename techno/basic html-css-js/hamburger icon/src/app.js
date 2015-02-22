$(document).ready(function () {
	$('.menu-icon').click(function (e) {
		e.preventDefault();
		$this = $(this);
		
		if ($this.hasClass("is-openned"))
			$this.addClass("is-closed").removeClass("is-openned");
		else
			$this.removeClass("is-closed").addClass("is-openned");

	});
});