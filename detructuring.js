//object destructuring

var user = {
  id: 201,
  name: "sakib",
  age: 32,
};
//object theke nam ber kore ekta variable e rakhbo
const { name } = user;
console.log(name); //sakib

//name ta jodi title alias er moddhe assign korte cai tahle
var { name: title } = user;
console.log(title); //sakib

//nested object
var education = {
  id: 201,
  name: "sakib",
  age: 32,
  profession: {
    class: "student",
    year: "4th",
  },
};

//how to display class ?
const {
  profession: { class: x },
} = education;
console.log(x);
//error handling
/*
if object is missing then we can set default value, so that the program don''t crash! 
*/

const {
  profession: { class: { test } = {} },
} = education;
console.log(test); //ans undefined, as if there is no class object and test property.

//Array Destructuring

var numbers = [1, 2, 3, 4, 5];
var [a, b] = numbers;
console.log(a, b); //1,2
//for access of 2, 5 in x,y variable
var [, x, , , y] = numbers;
console.log(x, y); //ans:2,5

var nested = [1, 3, 5, [100, 200, 300], 9, 10];
//get acess of 5,200,9
var [, , a, [, b], c] = nested;
console.log(a, b, c);
//ans: 5,200,9

//value swapping

var a = 1;
var b = 5;

// var temp = a;
// a = b;
// b = temp;
[b, a] = [a, b]; //magic line
console.log(a, b); //ans : 5,1
