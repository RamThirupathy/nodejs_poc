var person = {
    firstname: 'John',
    lastname: 'David',
    greet: function() {
        console.log('Hello '+this.firstname+" "+this.lastname);
    }
}
person.greet()
console.log(person.firstname+" "+person['lastname']);