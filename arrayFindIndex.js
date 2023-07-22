var numbers = [1, 2, 4, 5, 6, 7, 8];

var result = numbers.findIndex((currentValue, index, arr) => {
  return currentValue > 5;
});

console.log(result);
//output:4 cz arrayFind index condition match korle index ta ber kore dey.
