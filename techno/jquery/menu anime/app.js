;(function($){
    $("li").mouseover(function(){
		$(this).animate({height:'50px'}, {queue:false, duration:600, easing:'easeOutBounce'});
		alert("coucou");
	});

	$("li").mouseout(function(){
		$(this).animate({height:'50px'}, {queue:false, duration:600, easing:'easeOutBounce'});
	});	
})(jQuery);