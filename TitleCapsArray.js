// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

inp.question("Enter numbers separated by space: ", (data) => {
  // Split the input string by space
  input.push(...data.split(" "));
  // Close the input interface
  inp.close();
});

// Helper Function (one liner using arrow function)
const toTitleCaps = (str) => str.charAt(0).toUpperCase() + str.slice(1);
//str.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" "); //muliple strings with space seperated can use this
//str.replace(/\b\w/g, (char) => char.toUpperCase());(using regular expression)

// Define a function to print title caps - Function Expression
const anonymousFunc = function (arr) { //anonymous function
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(toTitleCaps(arr[i]));
  }
  console.log(output.join(" "));
};

// Define a function to print title caps - arrow Expression
const arrowFunc = (arr) => {
  let output = [];
  arr.forEach((str) => {
    output.push(toTitleCaps(str));
  });
  console.log(output.join(" "));
};

inp.on("close", () => {
  // Immediately invoked Function Expression (IIFE) to print title caps
  (function (arr) {
    let output = new Array(); // can define array in this way also
    arr.forEach(function (str) { //anonymous function starts here
      output.push(toTitleCaps(str));
    }); // anonymous function ends here
    console.log(output.join(" "));
  })(input);

  anonymousFunc(input);
  arrowFunc(input);
});
