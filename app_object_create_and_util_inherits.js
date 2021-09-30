var util = require('util');

//this becomes prototype(or parent)
var person = {
    firstname: '',
    lastname: '',
    greet: function () {
        console.log(util.format("Hello, %s %s", this.firstname, this.lastname));
    }
}

//create child objects
var ram = Object.create(person);
ram.firstname = 'ram'
ram.lastname = 'thirupathy'

var sumi = Object.create(person)
sumi.firstname = 'sumi'
sumi.lastname = 'saravanan'


ram.greet();
sumi.greet();



//other way of creating inheritance using util.inherits
function city(name) {
    this.name = name;
}

var base = function () {
    this.version = 1
    this.audit = function () {
        console.log(version + ' ' + createTime);
    }
}

base.prototype =  {
    createTime: "2021-08-08",
    audit: function () {
        console.log(this.createTime);
    }
}


//chaining city -> base.prototype
util.inherits(city, base);

var chennai = new city('chennai');
chennai.audit();