var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var json = [
  	{
  		id: "1d5se2z2",
	  	name: "OUech tonton",
	  	age: "28"
	},
  	{
  		id: "dc4sd5csdc",
	  	name: "Gerard Blanchard",
	  	age: "48"
	},
  	{
  		id: "sdc45sdc",
	  	name: "Blandine Comagri",
	  	age: "15"
	}
  ];
  res.send(json);
});

module.exports = router;
