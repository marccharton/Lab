var server = require("./server2");
var router = require("./router2");

server.start(router.route);