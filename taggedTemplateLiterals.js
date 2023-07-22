function modifier(strings, ...values) {
  const m = strings.reduce((prev, curren) => {
    return prev + curren + (values.length ? "Mr. " + values.shift() : "");
  }, "");
  return m;
}

var player1 = "Sakib";
var player2 = "Tamim";

console.log(modifier`We have ${player1} and ${player2} in our Team`);
//ans: We have Mr. Sakib and Mr. Tamim in our Team
