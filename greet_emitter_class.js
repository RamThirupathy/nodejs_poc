'use strict';

var Emitter = require('events');

class Greet extends Emitter {//extends completes the inheritance
    constructor() {
        super();
        this.greetMessage = "Hi"
    }

    greet(name) {
        console.log(this.greetMessage);
        this.emit('greet', name);
    }
}


module.exports = Greet;