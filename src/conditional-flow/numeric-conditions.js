// TODO: Implement the functions below to make the tests pass

// This function should return true if there are no elements in the array, false otherwise
function isArrayEmpty (array) {

  // TODO: write code in this function body to pass the tests
  return array.length < 1
}
// console.log(isArrayEmpty([]))

// This function should return true if num1 is greater than num2, false otherwise
function isGreaterThan (num1, num2) {

  // TODO: write code in this function body to pass the tests
  return num1 > num2
}
// console.log(isGreaterThan(5, 2))

// This function should return the lowest number in the passed array
function findLowest (nums) {

  // TODO: write code in this function body to pass the tests
  return Math.min(...nums)
}
// console.log(findLowest([3, 2, 1, 5]))

module.exports = {
  a: isArrayEmpty,
  b: isGreaterThan,
  c: findLowest
}
