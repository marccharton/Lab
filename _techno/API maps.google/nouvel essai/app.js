


function init() 
{
	var mycenter = new google.maps.LatLng(47.3325052, 5.0377512);
	
	var options = {
		center: mycenter,
		zoom: 10,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel : true,
		draggable : true,
		disableDoubleClickZoom : false
	};
	
	var map = new google.maps.Map(document.getElementById("map"), options);

	
	var marker = new google.maps.Marker({
		position : new google.maps.LatLng(47.3325052, 5.0377512),
		map: map
	});
}





