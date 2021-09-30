'use strict';

var Greeter = require('./greet_emitter_class');

var greeter1 = new Greeter();

greeter1.on('greet', function (data) {
    console.log('someone greeter: ' + data);
})

greeter1.greet('Sidhvik');
