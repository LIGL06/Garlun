var express = require('express');

var app = express();
var port = Number(process.env.PORT || 8080);

app.set("view engine", "jade");

app.use(express.static("public"));

app.get("/", function (req, res) {
    
    
    res.render("index");
});

app.listen(port);