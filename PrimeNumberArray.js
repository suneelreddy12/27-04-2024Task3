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

// function to print prime numbers - Function Expression
const anonymousFunc = function (arr) { //anonymous function
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (isPrime(num)) {
      console.log(num);
    }
  }
};

// function to print prime numbers - Arrow Function
const arrowFunc = (arr) => {
  arr.forEach((num) => {
    if (isPrime(num)) {
      console.log(num);
    }
  });
};

//helper function
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

inp.on("close", () => {
  // Immediately Invoked Function Expression (IIFE) to print prime numbers
  (function (arr) {
    arr.forEach(function(num) { //anonymous function starts here
        if (isPrime(num)) {
          console.log(num);
        }
      }); //anonyomus function ends here
  })(numbers);

  anonymousFunc(numbers);
  arrowFunc(numbers);
});
