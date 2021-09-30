var emitter = function () {
    this.events = {}
}


emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

emitter.prototype.emit = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(listener => {
            listener();
        });
    }
}

//passing the type and not reference to avoid conflicts between the consumers
module.exports = emitter;