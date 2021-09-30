function Person(fname, lname) {
    this.fname = fname;
    this.lname = lname;
}

Person.prototype = {
    greet: function() {
        console.log("Hello "+this.fname+" "+this.lname)
    }
}

var sumi = new Person("sumi", "s");
var sidhvik = new Person("sidhvik", "r");

sumi.greet();
sidhvik.greet();
console.log(sumi.__proto__);