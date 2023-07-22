let number = () => {
  return 10;
};
console.log(number());

let num = () => 200;
console.log(num());

var javascript = {
  name: "javascript",
  libraries: ["React", "Angular", "Vue"],
  printLibrarys: function () {
    this.libraries.forEach((a) => {
      console.log(`${this.name} loves ${a}`);
    });
  },
};
javascript.printLibrarys();
