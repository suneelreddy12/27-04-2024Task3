// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

inp.question("Enter numbers separated by space: ", (data) => {
  // Split the input string by space and convert to numbers
  input.push(...data.split(" "));
  // Close the input interface
  inp.close();
});

// function to print palindromes - Function Expression
const anonymousFunc = function (arr) { //anonymous function
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (isPalindrome(value)) {
      console.log(value);
    }
  }
};

// function to print palindromes - Arrow Function
const arrowFunc = (arr) => {
  arr.forEach((value) => {
    if (isPalindrome(value)) {
      console.log(value);
    }
  });
};

//helper function
const isPalindrome = (value) => {
  const reversed = value.split("").reverse().join("");
  return value === reversed;
};

inp.on("close", () => {
  // Immediately Invoked Function Expression (IIFE) to print palindromes
  (function (arr) {
    arr.forEach(function (value) { //anonymous function starts here
      if (isPalindrome(value)) {
        console.log(value);
      }
    }); //anonyomus function ends here
  })(input);

  anonymousFunc(input);
  arrowFunc(input);
});
