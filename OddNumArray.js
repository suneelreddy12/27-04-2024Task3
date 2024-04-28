// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numbers = [];

inp.question("Enter numbers separated by space: ", (data) => {
  // Split the input string by space and convert to numbers
  numbers.push(...data.split(" ").map(Number));
  // Close the input interface
  inp.close();
});

// Define a function to print odd numbers - Function Expression
const anonymousFunction = function (arr) {
  //anonymous function
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num % 2 != 0) {
      console.log(num);
    }
  }
};

// Define a function to print odd numbers - Arrow Function
const arrowFunc = (arr) => {
  arr.forEach((num) => {
    if (num % 2 != 0) {
      console.log(num);
    }
  });
};

inp.on("close", () => {
  // Immediately Invoked Function Expression (IIFE) to print odd numbers
  (function (arr) {
    arr.forEach(function (num) { //anonymous function starts here
      if (num % 2 != 0) {
        console.log(num);
      }
    }); //anonyomus function ends here
  })(numbers);

  anonymousFunction(numbers);
  arrowFunc(numbers);
});
