var numbers = [1, 2, 3, 4];
//var newNumbers = [numbers[0], numbers[1], numbers[2], numbers[3], 5, 6, 7];
var newNumbers = [...numbers, 5, 6, 7]; //magic
console.log(newNumbers);

var a = [...newNumbers]; //exact new carbon copy of newNumbers arrray

//another usecase
var num1 = [1, 2, 3];
var num2 = [4, 5, 6];
var numArray = [...num1, ...num2];
console.log(numArray);

//same mechanism works on object
var myObj1 = {
  x: 1,
  y: 2,
};

var myObj2 = {
  a: 3,
  b: 4,
};
var object = {
  ...myObj1,
  ...myObj2,
};
console.log(object);
