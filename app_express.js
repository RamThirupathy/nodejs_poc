'use strict'

var util = require('util');
var express = require('express');
var app = express();

var port = process.env.port || 3000;


app.get('/', function(req, res){
    res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/api', function(req, res){
    res.json({name:"Sumi", profession:"Designer"})
});

//path param
app.get('/person/:id', function(req, res) {
    res.send(util.format('<html><head></head><body><h1> %s </h1></body></html>', req.params.id));
});

app.listen(port);