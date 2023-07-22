function myFunc(...params) {
  //this rest operator ...params receives all the input parameters
  console.log(params);
  //output : [ 5, 6, 7, 8 ]
}

myFunc(5, 6, 7, 8);

//another example
function myFunc(a, ...params) {
  //a = first element =5
  //then  ...params will copy the array elements and it should be positioned at last.
  console.log(params);
  //output : [ 5, 6, 7, 8 ]
}

myFunc(5, 6, 7, 8);
