'use strict'
var fs = require('fs');
var zlip = require('zlib');//lib to gzip/undo gzip the files

var readable = fs.createReadStream(__dirname + '/lorum.txt');
var writable = fs.createWriteStream(__dirname + '/lorum.txt.gz');

var gzip = zlip.createGzip();

readable.pipe(gzip).pipe(writable);