const { check } = require("prettier")

// This function should return true if the passed string is equal to "Hello"
function isHello (val1) {

  // TODO: write code in this function body to pass the tests
  return val1 === "Hello"
}
// console.log(isHello("Hello"))

// This function should return true if the passed string is not equal to "Hello"
function isNotHello (val1) {

  // TODO: write code in this function body to pass the tests
  return val1 !== "Hello"
}
// console.log(isNotHello("Hello"))

// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan (val1, val2) {

  // TODO: write code in this function body to pass the tests
  return val1.length > val2.length
}
// console.log(isLongerThan('hello', 'bye'))

// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels (val1) {

  // TODO: write code in this function body to pass the tests
  let numOfVowels = 0
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (let char of val1) {
    if (vowels.includes(char)) {
      numOfVowels++
    }
  }
  // console.log('Number of Vowels:', numOfVowels)

  return numOfVowels % 2 !== 0;

  /* Alternatively:
  return val1.match(/[aeiou]/gi).length % 2 !== 0;
  */
}
// console.log(hasOddNumberVowels('hello'))

// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

/*
 READ string and check if has ODD or EVEN amount of letters. IF it's odd,
 RETURN the middle character. IF even, RETURN the middle 2 characters.
*/

function getMiddleLetter (val1) {
  // TODO: write code in this function body to pass the tests
  const middleChar = Math.floor(val1.length / 2);
  const middleEvenHalf = middleChar - 1;

  if (val1.length % 2 === 1) {
    return val1[middleChar];
  } 
  else {
    return val1[middleEvenHalf] + val1[middleChar];
  }
}
// console.log(getMiddleLetter('heyo'))

// This function should return the name of the season for the provided
// month name. For example, "January" should return "Winter". If the provided
// value is not a valid month, an empty string ("") should be returned. Use
// the below ranges for each season:
//
// Spring - March to May
// Summer - June to August
// Autumn - September to November
// Winter - December to February
function seasonForMonth (monthName) {

  // TODO: write code in this function body to pass the tests
  const monthList = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ]

  if (monthName === monthList[2] || monthName === monthList[3] || monthName === monthList[4]) {
    return 'Spring'
  }
  else if (monthName === monthList[5] || monthName === monthList[6] || monthName === monthList[7]) {
    return 'Summer'
  }
  else if (monthName === monthList[8] || monthName === monthList[9] || monthName === monthList[10]) {
    return 'Autumn'
  }
  else if (monthName === monthList[11] || monthName === monthList[0] || monthName === monthList[1]) {
    return 'Winter'
  }
  else {
    return ""
  }
}
//console.log(seasonForMonth('March'))

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth
}
