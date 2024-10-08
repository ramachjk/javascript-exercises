const reverseString = function (input) {
  let newString = "";
  for (i = input.length - 1; i >= 0; i--) {
    newString += input[i];
  }

  return newString;
};

// Do not edit below this line
module.exports = reverseString;
