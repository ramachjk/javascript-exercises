const removeFromArray = function (originalArray, ...filterOut) {
  let arr = originalArray;
  let newArray = arr.filter((arrs) => !filterOut.includes(arrs));

  return newArray;
};

// console.log(removeFromArray([1, 2, 3, 4], 2));

// Do not edit below this line
module.exports = removeFromArray;
