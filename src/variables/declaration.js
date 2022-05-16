//
//
//
// TODO: Declare the variables firstName and age so that the tests pass
let firstName = 'Jane'

let age = 35
// do not edit below this line
let firstNameExport = ''
try { firstNameExport = firstName } catch (e) {}

let ageExport = 0
try { ageExport = age } catch (e) {}

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
