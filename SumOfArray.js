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

// function to print sum of numbers - Function Expression
const anonymousFunc = function(arr) {
    let output = 0;
    for(let i = 0; i < arr.length; i++) {
        output += arr[i];
    }
    console.log(output);
};

// function to print sum of numbers - Arrow Function
const arrowFunc = (arr) => {
    console.log(helperSum(arr));
};

// Helper Function
const helperSum = (arr) => {
    let output = 0;
    arr.forEach(num => {
        output += num;
    });
    return output;
};

inp.on("close", () => {
  // Immediately Invoked Function Expression (IIFE) to print odd numbers
  (function (arr) {
    console.log(helperSum(arr));
  })(numbers);

  anonymousFunc(numbers);
  arrowFunc(numbers);
});
