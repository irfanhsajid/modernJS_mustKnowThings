var numbers = [1, 2, 3, 4, 5, 6, 7, 8];

var result = numbers.find(function (currentValue) {
  return currentValue > 4;
});

console.log(result);
//ans:5 (first value>4 is the result and then the find method executes )
