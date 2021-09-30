'use strict'

var http = require('http');
var fs = require('fs'); 

//sync
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
//     res.end(html);
// }).listen(1337, '127.0.0.1')

//stream
// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname+'/index.htm').pipe(res);
// }).listen(1337, '127.0.0.1')

//json response and routing
// http.createServer(function(req, res){
//    res.writeHead(200, {'Content-Type': 'application/json'});
//    var obj = {
//        firstName: "sumi",
//        lastName: "s"
//    }
//    res.end(JSON.stringify(obj));
// }).listen(1337, '127.0.0.1');

//routing
http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        var obj = { 'status': 'healthy' }
        res.end(JSON.stringify(obj));
    } else{
        res.writeHead(404);
        res.end();
    }
}).listen(1337, '127.0.0.1');