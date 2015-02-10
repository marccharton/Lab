/* 
* @Author: Marc
* @Date:   2014-04-26 14:35:24
* @Last Modified by:   Marc
* @Last Modified time: 2014-04-26 14:48:28
*/
/* 
* @Author: Marc
* @Date:   2014-04-26 14:35:24
* @Last Modified by:   Marc
* @Last Modified time: 2014-04-26 14:35:24
*/

var express = require('express');

var app = express();

app.get("/", function(req, res){
	res.setHeader("Content-Type", "text/html");
	res.render("index.ejs");
});

app.listen('4747');
