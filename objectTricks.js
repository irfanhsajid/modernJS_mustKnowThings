const myObject = {
  name: "Javscript",
  estd: "1995",
  founder: "Brendan Eich",
};
var keys = Object.keys(myObject);
console.log(keys);
//returns an array of keys
//output: [ 'name', 'estd', 'founder' ]

var values = Object.values(myObject);
console.log(values);
//returns array of values
//output: [ 'Javscript', '1995', 'Brendan Eich' ]

var entries = Object.entries(myObject);
console.log(entries);
//returns an array of key:values pair
