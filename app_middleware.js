'use strict'

var util = require('util')
var express = require('express');
var app = express();

app.use('/assets', express.static(__dirname + "/public"));

app.use(function(req, res, next){
  console.log(util.format("Request URL: %s", req.url));
  next();
});
//check expressjs.com/resources/middleware.html for more middlewares

app.get('/test', function (req, res) {
    res.send('<html><head><link href=assets/styles.css type=text/css rel=stylesheet/></head><body><h1>Hello world!</h1></body></html>');
});

app.listen(3000);