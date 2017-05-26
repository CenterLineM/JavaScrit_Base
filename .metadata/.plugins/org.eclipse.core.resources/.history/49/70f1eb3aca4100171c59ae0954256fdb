/**
 * 
 */

var express = require('express');
var app = express.createServe();

app.use(express.bodyParser());
app.all('/', function(req, res) {
	res.send(req.body.title + req.body.text);
});

app.listen(3000);