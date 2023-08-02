// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Echo 2023"
// console.log(cohort.split(" "))

// a) Your answer: "E", "c", "h", "o", " ", "2", "0", "2", "3"
// b) Verify and explain: 
// Verified: 'E', 'c', 'h',
// 'o', ' ', '2',
// '0', '2', '3'
// Explained: The built in method .split("") splits the string into seprate strings. If we were to use .split(" ") with a string in the middle we would get "Echo" "2023", seperating the the spaced words into seperate strings.


// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: we would get undefined because we dont have a set parameter or arguement
// b) Verify and explain: 
// Verified: undefined
// Explained: if we were set const name1 = "LEARN Student" and console.log (greeter(name1)) and add in a return to the function we would get a defined output of 'Hello, LEARN Student! 
const name1 = "LEARN Student"
const greeter = (name) => {
  return `Hello, ${name}!`
}
console.log(greeter(name1))
//output: Hello, LEARN Student!


// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: 8, 10, 12, 14, 16
// b) Verify and explain: 
// Verified:[ 8, 10, 12, 14, 16 ]
//Explained: The .map() is returning the a new array of each value within the array being multipled by 2. number being used for the values of the each value(number) being multplied by 2. The .map could be used as a function if we made it one but the console.log would a different for example looking like so: console.log(funcTion(multipiedByTwo)) .map((number) => number * 2) would need to be removed from the varible.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: 11, 13, 15
// b) Verify and explain:
//verified: [ 11, 13, 15 ]
// Explained: [ 11, 13, 15 ] is the output because .filter() is transforming the current array into another array. (number) => number % 2 !== 0 is letting us know number is our value(name) and we want our => number to be divided 2 evenly and but since we are using the modulo sign and the !== 0 we are looking for the oposite, so not evenly divided by 2 we output come is 11, 13, 15 and if we were to change the !== to === we would get 12, 14.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain:
//Verified: JavaScript
//Explained: myCodingSkills is where we are pulling our data from and the .langauge is do notation and is letting know what method or key to pull from and [0] is known as bracket notation and is letting us know to output JavaScript. If the [] notation was set to [1] we would get an output of Ruby. If we were to console.log(myCodingSkills.frameworks[1]) our output would be Ruby on Rails.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: student: "George", cohort: "Echo", year: 2023
// b) Verify and explain: 
//Verified: Learn { student: 'George', cohort: 'Echo', year: 2023 }
//Explained: Learn is our class. So we know where to pull information from. name is set to this.student. In the constrcutor we are only being asked of one value. The values we be matched in the order they are recieved. For example if we added year to the constructor we would need to display it the code like so: constructor(year, name) and match this.year = year. We would then need to change our variable. const learnStudent = new Learn(2020, "George")
// Learn { student: 'George', cohort: 'Echo', year: 2020 }
//-------> see our output still displays everything in the same order but we need to make sure our data in new Learn()matches the constructor order. If we were to place 2020 and the other side of "George" like: ("George", 2020) we get student: 2020 and year: "George"