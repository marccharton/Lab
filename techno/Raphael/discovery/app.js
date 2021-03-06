function $(id) 	{ 	return document.getElementById(id);	}
function test() {	$('text').innerHTML += 'you clicked <br />'; }
function moins(){ 	circle.animate(Raphael.animation({r: 20}, 1000)); }
function plus() { 	circle.animate(Raphael.animation({r: 200}, 1000)); }

var paper = Raphael(0, 200, 1000, 1000);
var circle = paper.circle(250, 250, 200);

circle.attr("fill", "#f00");
circle.attr("href", "http://www.google.fr");
circle.attr("target", "_blank");
circle.attr("stroke", "black");
circle.attr("stroke-width", "2");

var anim1 = Raphael.animation({fill: 'blue'}, 1000);
var anim2 = Raphael.animation({r: 20}, 1000);

circle.animate(anim1.repeat('Infinity'));
circle.click(test)

for (var i = 0; i < 5; i++) {    
	paper.circle(100 + 150 * i, 100, 100)
		 .attr({fill: "blue"})
		 .data("i", i)
		 .click(plus)
		 .dblclick(function () {
			alert(this.data("i"));
		 });
}