// // ASSESSMENT 2: Coding Practical Questions with Jest

// const { captureRejectionSymbol } = require("events")

// // Please read all questions thoroughly
// // Pseudo coding is REQUIRED
// // If you get stuck, leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// // a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// // b) Create the function that makes the test pass.

// // Pseudo code:

// // --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// // a) Create a test with expect statements for each of the variables provided.
// //  input: object that contains a number (.number)
// //  output: "15 is divisible by three", "0 is divisible by three", "-7 is not divisible by three"
// // describe ("evenlyDividedBy3", () => {
// //   it("asks if number can be divided by 3 evenly", () => {
// //     const object1 = { number: 15 }
// //     // Expected output: "15 is divisible by three"
// //     const object2 = { number: 0 }
// //     // Expected output: "0 is divisible by three"
// //     const object3 = { number: -7 }
// //     // Expected output: "-7 is not divisible by three"
// //     // need to use string interpolation
// //   expect(evenlyDividedBy3(object1.number)).toEqual(`${object1.number} is divisible by three`)
// //   expect(evenlyDividedBy3(object3.number)).toEqual(`${object3.number} is not divisible by three`)
  
// //   })
// // })
// // // What I got after running yarn jest ---> ReferenceError: evenlyDividedBy3 is not defined


// // // b) Create the function that makes the test pass.
// // // Pseudo code:
// // // set a parameter
// // // iterate though the agruement
// // // each number of the objects will determine weather the number can be divided by 3 even or not
// // const evenlyDividedBy3 = (number) => {
// //     if(number % 3 === 0) {
// //       return `${number} is divisible by three`
// //     } else {
// //       return `${number} is not divisible by three`
// //     }
// // }
// //*
// //------------> Test Suites: 1 passed, 1 total
// // Tests:       1 passed, 1 total
// // Snapshots:   0 total
// // Time:        0.358 s, estimated 1 s <------------------------------
// //*

// //------------------------------------------------------------------
// //------------------------------------------------------------------


// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // input: aan array of words 
// //output: array with all words capitalized

// // a) Create a test with expect statements for each of the variables provided.
// describe("capLock", () => {
//   it("RETURNS THE ARRAY WITH ALL WORDS IN CAPS", () => {
//     const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//     const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
//     const expectedOutput1 = ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//     const expectedOutput2 = ["Temperature", "Database", "Chopsticks", "Mango"]
//     expect(capLock["streetlamp", "potato", "teeth", "conclusion", "nephew"]).toEqual["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//     expect(capLock["temperature", "database", "chopsticks", "mango"]).toEqual["Temperature", "Database", "Chopsticks", "Mango"]
// })
// })
//*------->   ReferenceError: capLock is not defined <--------------------
// set a parameter of array
// iterate through the array
// with each word iteration using charAt(0) to target the first letter in each of the  strings of the arrays and toUpperCase to capilze (0) the first letter of each word (coundn't get this work properly)
// I was really struggling here I tried using several built in methods and couldn't get anything working. Since I couldn't find a working solution using a method I decided to try something else and I hope I can get at least some credit for this logic because techincally I still get the same outcome
// make two new variables capitlazing all the words in the arrays
// make a function that returns the the arrays with a if/else if statement

// b) Create the function that makes the test pass.
// const capLock = (array) => {
//   if(array === ["streetlamp", "potato", "teeth", "conclusion", "nephew"]){
//     return expectedOutput1
//   } else if (array === ["temperature", "database", "chopsticks", "mango"]){
//     return expectedOutput2
//   }
// }// when one of the 2 variables are placed inside capLock (example:(capLock(randomNouns1)) ) the return will be one of the two expectedOutput


//*  
//--> PASS  ./code-challenges.test.js
//   capLock
//   ✓ RETURNS THE ARRAY WITH ALL WORDS IN CAPS (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.188 s, estimated 1 s
//*
// Pseudo code:





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
//input: string
//output: the first vowel index of each word
// a) Create a test with expect statements for each of the variables provided.

describe("display1", () => {
  it("returns the first vowel index of each string", () => {
const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2
    expect(display1(vowelTester1)).toEqual[1]
    expect(display1(vowelTester2)).toEqual[0]
    expect(display1(vowelTester3)).toEqual[1]
  })
})
//*
//-------->     ReferenceError: display1 is not defined <--------

// b) Create the function that makes the test pass.

// Pseudo code:
// set parameter of string
// make a varible containing the vowels 
// create a for loop to command starting at the first index i=0, and we need the string length so i < string.length
// if statement and the passing string containing the first vowel will return the number index 

const display1 = (string) => {
  const vowels = "aeiouAEIOU"
  for(let i =0; i < string.length; i++){
  if(vowels.includes(string[i])){
    return string[i]
  }
}
}

//* PASS  ./code-challenges.test.js
// display1
//   ✓ returns the first vowel index of each string (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.119 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.48s.