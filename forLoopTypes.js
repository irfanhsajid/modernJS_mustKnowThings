//for loop
for (i = 0; i <= 5; i++) {
  console.log(i);
}

//for in loop (works on Object)
const myObject = {
  name: "Javscript",
  estd: "1995",
  founder: "Brendan Eich",
};
for (property in myObject) {
  console.log(property);
}

//for of loop (iterate throgh array, string(word by word)

const myArray = ["Javscript", "1995", "Brendan Eich"];
for (element of myArray) {
  console.log(element); //ans: javascript, 1995, Brendan Eich
  //if I used for in loop here then it will return array index output in every iteration 0,1,2
}

const myString = "Bangladesh";
for (str of myString) {
  console.log(str);
}
/* output: 
B
a
n
g
l
a
d
e
s
h*/
