var express = require('express');
var app = express();
var http = require('http');
app.set("view engine", "jade");
app.use(express.static("public"));

var server = http.createServer(function(req, res){
 res.render("index");
});

server.listen(3000);