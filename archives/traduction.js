var text = {};

text.en_EN = {
	"hello" : "hello",
	"goodbye" : "goodbye",
	"see you" : "see you"
};

text.fr_FR = {
	"hello" : "bonjour",
	"goodbye" : "au revoir",
	"see you" : "A plus"
};


var language = "en_EN";

var _t = function (sWord) {
	trad = text[language];
	return trad[sWord];
}

/////////////////////////////////


console.log("Language : " + language);

console.log("hello : " + _t("hello"));
console.log("goodbye : " + _t("goodbye"));
console.log("see you : " + _t("see you"));