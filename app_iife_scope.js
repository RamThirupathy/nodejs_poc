var fname = "sumi";

//IIFE - faking a module
(function() {
 //scoped to this function   
  var fname = "ram";  
  console.log(fname);
}());

console.log(fname);