 var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);


function onFileRead(err, data) {
    console.log(data);
}

//gives the complete file and we have to use stream if we want one chunk at a time 
fs.readFile(__dirname + '/greet.txt', 'utf8', onFileRead);
fs.readFile(__dirname + '/greet.txt', 'utf8', onFileRead);
console.log('Done');

//Streams:
//2nd argument is options
var readable = fs.createReadStream(__dirname + '/lorum.txt', {
    encoding: 'utf8',
    highWaterMark: 1
});
var writable = fs.createWriteStream(__dirname + '/lorum_result.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });
readable.on('data', function (chunk) {//overriding on method in EventEmitter
    console.log(chunk);
    writable.write(chunk);
});

