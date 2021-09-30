'use strict'; //to see all warnings and must to have in production code
var a =1; //if we remove the var then node is throwing error, thanks to line1

class Person {
    //similar to functional constructor
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    //similar to Person.prototype.greet
    greet() {
        console.log(`Hello ${this.firstname} ${this.lastname}`)
    }
}

var sumi = new Person('sumi', 'saravanan');
sumi.greet();

var sidhvik = new Person('sidhvik', 'R');
sidhvik.greet();