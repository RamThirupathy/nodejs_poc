// var a = 1;
// var b = 1;

// console.log("Result is "+(a+b));

//function statement
function greet() {
    console.log("hi!!");
}
greet();


//first-class
function invokeFunction(fn){
    fn();
}
invokeFunction(greet);

//expression
var greetMe = function(){
    console.log("Hi Ram!!");
}
greetMe();
invokeFunction(greetMe);

//use function on the fly
invokeFunction(function(){
    console.log("Fly!!");
});