var util = require('util');

export function greet(name) {
    console.log(util.format('Hi, %s.', name));
}