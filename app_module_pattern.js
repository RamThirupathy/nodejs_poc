var greet = require('./greet').greet;

var log = require('./greet').log;
log("hi there");


var greet2 = require('./greet').greet2;
greet2.greet();
greet2.greetings = "hola";


//using require multiple time or in multiple file will return
//the same object as its cached when the first time require is executed
var greet22 = require('./greet').greet2;
greet2.greet();


var greet3 = require('./greet').greet3;
var greet3_2 = new greet3();
greet3_2.greet();

var greet4 = require('./greet').greet4;
greet4.greet();