const numsZeroToThree = []
const numsFiveToTen = []
const evenNums = []
const countdown = []

// TODO: Write a for loop that adds the numbers 0 to 3 to the numsZeroToThree array
maxThree = 3

for (let i = 0; i <= maxThree; i++) {
  numsZeroToThree.push(i)  
}
// TO TEST:
// console.log(numsZeroToThree)

// TODO: Write a for loop that adds the numbers 5 to 10 to the numsFiveToTen array
maxTen = 10

for (let i = 5; i <= maxTen; i++) {
  numsFiveToTen.push(i)
}
// TO TEST:
// console.log(numsFiveToTen)

// TODO: Write a for loop that adds all the even numbers between 0 and 6 (0, 2, 4, 6) to evenNums
maxEven = 6

for (let i = 0; i <= maxEven; i += 2) {
  evenNums.push(i)
}
// TO TEST:
// console.log(evenNums)

// TODO: Write a for loop that adds the numbers 3 to 0 (in that order) to the countdown array
for (let i = maxThree; i >= 0; i--) {
  countdown.push(i)
}
//TO TEST:
// console.log(countdown)

// do not change below this line
module.exports = {
  a: numsZeroToThree,
  b: numsFiveToTen,
  c: evenNums,
  d: countdown
}
