var emitter = require("./emitter.js");

var emit = new emitter();

emit.on('greet', function () {
    console.log("Listener 1");
});

emit.on('greet', function () {
    console.log("Listener 2");
});

emit.emit('greet');