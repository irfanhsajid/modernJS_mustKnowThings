function log(anything) {
  console.log(anything);
}

let array = [1, 2, 3, 4, 5, 6, 7, 54, 4, 3, 2];

//making unique array elements using Set.
log([...new Set(array)]);

let a = new Set([1, 2, 3]);
let b = new Set([3, 4, 5]);

let union = new Set([...a, ...b]);
log(union);

let intersection = new Set([...a].filter((x) => b.has(x)));
log(intersection);

let difference = new Set([...a].filter((x) => !b.has(x)));
log(difference);
