/*
    * Javascript Loops and Template Strings
    Additional information
    - MDN Javascript Loops
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
    -MDN Javscript try-catch-finally
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
    -MDN Template Strings
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/

// types of loops
// while, do while, for 

// syntactic sugar for while-loop:
for (let x; x < 10; x++)
{
    // loop body
}
// is the same as
{
    let x
    while (x<10) {
        // loop body
        x++
    }
}

// infinite loop with for
// for (;;) {}

// ! for in
/* 
Syntax:
    for(variable in object) {

    }
*/

let names = ["Jack", "Jill", "Jane", "Bob"]
for (let index in names) {
    console.log(names[index])
}

let cars = {"Ford": 1, "Honda": 2, "Nissan": 3}
for (let key in cars) console.log(key)

// easiest part to loop through objects
let user = {name: "Bob Smith", age: 55}
for (let attr in user) {
    console.log(attr, "=", user[attr])
}

let sparceArray = [1,2,3]
sparceArray[10] = 10
// doesn't print out the undefineds in the middle
for (let i in sparceArray) console.log(sparceArray[i])

let testString = "Javascript"
for (let index in testString) console.log(testString[index])

// ! For of
// unpack object with Object.entries()
for (let [key, value] of Object.entries(cars)) console.log(key, value)
// also works with sparce arrays, without printing out the undefineds
for (let [key, value] of Object.entries(sparceArray)) console.log(key, value)

console.log("iterate through Javascript, one letter at a time:")
for (let letter of testString) console.log(letter)


/*
    * break and continue
*/

// checks if age is a positive number, if not, repeats
// for (;;) {
//     let s = prompt("What is your age?", "")
//     if (!s) continue
//     let age = parseInt(s)
//     if (isNaN(age) || age <= 0) {
//         alert("Age must be positive number")
//     } else {
//         break
//     }
// }

/*
    * Try and catch
    try...catch
    try...finally
    try...catch...finally
*/

// Syntax
try {
    // code here
} catch (error) {
    // do something with error
    console.log(error)
} finally {
    // run code after everything else is finished
}

/*
    * Add padding
    .padStart()
    .padEnd()
*/

console.log("5".padStart(2, "0")) // prints out 05
console.log("5".padStart(6, "0")) // prints out 000005

// create a random hexadecimal color:
let randomHex = ""
for (let randomInt = 0; randomInt < 4; randomInt++) {
    // gets a random int from 0 to 255, later turns this into hexadecimals with toString()
    let randomizedInt = Math.floor(Math.random() * 256).toString(16)
    randomHex = randomHex + randomizedInt.padStart(2, 0)
}
console.log(randomHex)