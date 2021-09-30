var greet = function () {
    log("hi");
}

function log(str) {
    console.log(str);
}


//only one statement on this? how to export multiple functions - using a folder and index.js

//pattern 1
//module.exports = greet;

//pattern 2
module.exports.greet = greet;

//pattern 3
module.exports.log = function log(str) {
    console.log(str);
}

//pattern 4
function greet2() {
    this.greetings = "hi there";
    this.greet = function () {
        console.log(this.greetings);
    }
}
module.exports.greet2 = new greet2();

//pattern 5 - returning the type and creating object at the caller
module.exports.greet3 = greet2;

//pattern 6
module.exports.greet4 = {
    greet: function(){
        console.log("Hi from pattern 6");
    }
}