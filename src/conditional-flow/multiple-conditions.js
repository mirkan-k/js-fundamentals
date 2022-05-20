// This function should return true if num is greater
// than or equal to lower AND less than or equal to upper.
// Implement this with a single condition.
function isInRange (num, lower, upper) {

  // TODO: write code in this function body to pass the tests
  return num >= lower && num <= upper
}
// console.log(isInRange(3, 2, 5))

// This function should return true if the passed string is equal
// to "Hello" or "Goodbye". Implement this with a single
// if statement.
function isHelloOrGoodbye (val1) {

  // TODO: write code in this function body to pass the tests
  return val1 === "Hello" || val1 === "Goodbye"
}
// console.log(isHelloOrGoodbye("Hello"))

// This function should return a string that describes the provided age value. The
// table below shows for each range of age values what string should be returned.
//
// For example, if an age of 3 is provided to the function, "Toddler" should be
// returned.
//
// Input   Output
// 0      | Baby
// 1-4    | Toddler
// 5-12   | Child
// 13-19  | Teenager
// 20+    | Adult
function getAgeDescription (age) {

  // TODO: write code in this function body to pass the tests
  switch (age) {
    case 0:
      ageType = "Baby"  
    break;

    case 1:
    case 2:
    case 3:
    case 4:
      ageType = "Toddler"
    break;

    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      ageType = "Child"
    break;

    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      ageType = "Teenager"
    break;

    default:
      ageType = "Adult"
  }

  return ageType
}
// console.log(getAgeDescription(2))

module.exports = {
  a: isInRange,
  b: isHelloOrGoodbye,
  c: getAgeDescription
}
