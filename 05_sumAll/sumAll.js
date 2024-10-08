const sumAll = function (number1, number2) {
  if (
    !Number.isInteger(number1) ||
    number1 <= 0 ||
    !Number.isInteger(number2) ||
    number2 <= 0
  ) {
    return "ERROR";
  } else {
    numOfInt = Math.abs(number1 - number2) + 1;
    finalSum = (numOfInt * (number1 + number2)) / 2;
    return finalSum;
  }
};

// Do not edit below this line
module.exports = sumAll;
