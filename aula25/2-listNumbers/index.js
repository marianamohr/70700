const process = require("node:process");

console.log("listNumbers");

const listNumbers = (...numbers) => {
  let sum = 0
  numbers.forEach((n) => {
    if (typeof n === "number") {
      console.log(n, typeof n);
      sum = sum + n
    } else {
      console.log("else", n, typeof n);
      console.log("else",sum)
      process.exit(9);
    }
  });
  console.log(sum)
};

listNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// listNumbers(1, 2, 3, 4, "5", 6, 7, 8, 9, 10);
