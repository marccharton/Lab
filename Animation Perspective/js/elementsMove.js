
function $(id) { return document.getElementById(id); }
function _(str) { return Math.floor(str.replace(new RegExp("(px)", "g"), "")); }

function getMousePosition(event)
{
	var e = event || window.event;
	var scroll = new Array((document.documentElement && document.documentElement.scrollLeft) || window.pageXOffset || self.pageXOffset || document.body.scrollLeft,(document.documentElement && document.documentElement.scrollTop) || window.pageYOffset || self.pageYOffset || document.body.scrollTop);;
	return new Array(e.clientX + scroll[0] - document.body.clientLeft,e.clientY + scroll[1] - document.body.clientTop);
}

function moveElement(mousePosition)
{
	$('elem1').style.left = 800 - (mousePosition[0] - 800) / 6 + 20 + 'px';
	$('elem2').style.left = 800 - (mousePosition[0] - 800) / 5 + 10 + 'px';
	$('elem3').style.left = 800 - (mousePosition[0] - 800) / 4 + 'px';
	
	$('elem1').style.top = 300 - (mousePosition[1] - 300) / 8 + 'px';
	$('elem2').style.top = 300 - (mousePosition[1] - 300) / 6 + 'px';
	$('elem3').style.top = 300 - (mousePosition[1] - 300) / 4 + 'px';
	
	$('mouseInfo').innerHTML += '<br />' + 'elem1: ' + _($('elem1').style.left) + ', ' + _($('elem1').style.top);
	$('mouseInfo').innerHTML += '<br />' + 'elem2: ' + _($('elem2').style.left) + ', ' + _($('elem2').style.top);
	$('mouseInfo').innerHTML += '<br />' + 'elem3: ' + _($('elem3').style.left) + ', ' + _($('elem3').style.top);
}

function addInfo(event){
	var mouseInfo = document.getElementById('mouseInfo');
	var mousePosition = getMousePosition(event);
	mouseInfo.innerHTML = 'Mouse position : ' + 'x:'+mousePosition[0] + 'y:'+mousePosition[1];
	
	moveElement(mousePosition);
}