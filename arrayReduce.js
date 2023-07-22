var numbers = [1, 2, 3, 4, 5, 6];
var sum = numbers.reduce((prevValue, currentValue, currentIndex, arr) => {
  return prevValue + currentValue;
}, 0);
//reduce memorizes previous value
//reduce make operations with the whole array and returns single value
console.log(sum);
//ans:21
