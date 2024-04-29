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

// function to remove duplicates from a given array - Function Expression
const anonymousFunc = function (arr) { //anonymous function
  let output = new Array();
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (!output.includes(value)) {
      output.push(value);
    }
  }
  console.log(output);
};

// function to remove duplicates from a given array - Arrow Function
const arrowFunc = (arr) => {
  console.log(helperFunc(arr));
};

//helper function
const helperFunc = (arr) => {
  let output = [];
  arr.forEach(function (value) { //anonymous function starts here
    if (!output.includes(value)) {
      output.push(value);
    }
  }); //anonyomus function ends here
  return output;
};

inp.on("close", () => {
  // Immediately Invoked Function Expression (IIFE) to remove duplicates from a given array
  (function (arr) {
    console.log(helperFunc(arr));
  })(input);

  anonymousFunc(input);
  arrowFunc(input);
});
