var age = 19;
if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}
//so it can be written in one line by using ternary operator
var age = 9;
var type = age >= 18 ? "adult" : age < 10 ? "child" : "young";
console.log(type);

var x = 5;
var check = x > 5;
console.log(check);
//output : false
