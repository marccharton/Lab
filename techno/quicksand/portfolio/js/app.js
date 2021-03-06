$(document).ready(function(){
	

	
    var items = $('#stage li'),
        itemsByTags = {};

	
	items.each(function(i){
	
		 var elem = $(this),
			 tags = elem.data('tags').split(',');
		
		elem.attr("data-id", i);
		
		$.each(tags, function(key, value){
			value = $.trim(value);
			
			if(!(value in itemsByTags)) {
				itemsByTags[value] = [];
			}
			
			itemsByTags[value].push(elem);
		});
	});
	
	

	// Creating the "Everything" option in the menu:
	createList('Everything',items);

	// Looping though the arrays in itemsByTags:
	$.each(itemsByTags,function(k,v){
		createList(k,v);
	});
	
	$('#filter a').live('click',function(e){
		var link = $(this);
		
		link.addClass('active').siblings().removeClass('active');
		
		// Using the Quicksand plugin to animate the li items.
		// It uses data('list') defined by our createList function:
		
		$('#stage').quicksand(link.data('list').find('li'));
		e.preventDefault();
	});
	
	$('#filter a:first').click();
	
	function createList(text,items){
		
		// This is a helper function that takes the
		// text of a menu button and array of li items
		
		// Creating an empty unordered list:
		var ul = $('<ul>',{'class':'hidden'});
		
		$.each(items,function(){
			// Creating a copy of each li item
			// and adding it to the list:
			
			$(this).clone().appendTo(ul);
		});

		ul.appendTo('#container');

		// Creating a menu item. The unordered list is added
		// as a data parameter (available via .data('list'):
		
		var a = $('<a>',{
			html: text,
			href:'#',
			data: {list:ul}
		}).appendTo('#filter');
	}
});