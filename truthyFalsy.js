/*
    falsy values: 
    1.false
    2.0
    3.""
    4.NUll
    5.Undefined
    6.NaN
rest evething is truthy values
*/

var myVar = "";

if (myVar) {
  console.log("I am truthy");
} else {
  console.log("I am falsy!");
}
