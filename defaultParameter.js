function myFunc(x = 10) {
  //default parameter
  return x;
}
console.log(myFunc()); //10

function myFunc1(x = 10) {
  //default parameter
  return x;
}
console.log(myFunc1(4)); //ans: 4

function myFunc2(x = 10) {
  //default parameter
  return x;
}
console.log(myFunc2(undefined)); //ans: 10 //no values and undefined are the same thing.

function myFunc3(x = 10) {
  //default parameter
  return x;
}
console.log(myFunc3(null)); //ans: null
