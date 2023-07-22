var numbers = [1, 2, 4, 5, 6, 7, 8];

var result = numbers.filter((currentValue, index, arr) => {
  return currentValue > 4;
});
console.log(result);
//output: [ 5, 6, 7, 8 ]
