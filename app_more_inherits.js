var util = require('util');
var emit = require('events');

function Greeter() {
    this.greet = function (name) {
        console.log("Hello, " + name);
        this.emit('greet', name)
    }
}

//create a prototype chain Greeter -> events.prototype
util.inherits(Greeter, emit);

var greeterObj = new Greeter();
greeterObj.on('greet', function (data) {
    console.log('greet event: ' + data);
})


greeterObj.greet("sidhvik");


var base = {
    version: 1,
    update: function (newVersion) {
        this.version = newVersion;
    }
}

function car() {
    this.printDetails = function () {
        console.log(this.version);
    }
}

car.prototype = base;

var swift = new car();
swift.printDetails();
swift.update(2);
swift.printDetails();

var i20 = new car();
i20.printDetails();