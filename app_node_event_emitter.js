var emitter = require('events');
var eventsConfig = require('./events_config').events;

var emtr = new emitter();

emtr.on(eventsConfig.GREET, function(){
    console.log("Somebody greeted");
});

emtr.on(eventsConfig.GREET, function(){
    console.log("increment the greeting count");
})


emtr.emit(eventsConfig.GREET);