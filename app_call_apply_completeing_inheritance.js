var util = require('util');
var name = 'Sidhvik'

//ES6 template string feature
console.log(`Hello ${name}`);

var obj = {
    greet: function () {
        console.log("Hello");
    }
}

obj.greet();


//Call and Apply
var obj = {
    name: 'ram kumar',
    greet: function (param) {
        console.log(`hello ${this.name}`);//if we dont use this then name at line1 is used here
    }
}

obj.greet();
obj.greet.call({ name: 'sumi' })//param is passed as comma seperated arguments
obj.greet.apply({ name: 'sidhvik' })//param in passed in []

//complete the inheritance using call and apply
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function () {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
}

function Policeman(badgeNumber) {
    Person.call(this, "ram", "kumar");//this is like super constructor, which completes the inheritance
    this.badgeNumber = badgeNumber;
}
util.inherits(Policeman, Person);
var singam = new Policeman(1);
singam.greet();