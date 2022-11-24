/*
    * Javascript Functions. Generators and Rules for Good Programming
    Additional information:
    -Javascript functions
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    -Jvascript generators
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
*/

/*
    * Functions
    Syntax:
    function functionName(parameters) {
        function body
    }
*/

// Some ways of making functions

// Takes arguments and returns something
// less bug-prone, easier to find and fix
function inchesToCm(inch) {
    return inch * 2.54
}

// takes parameters, but doesnt return anything
function printMany(s,n) {
    // first compares and then does the minus operation
    while (n-- > 0) {
        console.log(s)
    }
}

// doesnt take parameters, but returns something
function tellSecret() {
    return "the secret was the friends we made along the way"
}

// no parameters, no returns
function theEnd() {
    console.log("This is the end")
}

// ! Functions should be thought of as services, that should do only one thing

// functions can have default values
// it is often a good idea to have one
function printMany(s, n=5) {
    while (n-- > 0) console.log(s)
}

// functions can have extra parameters, they will be dismissed silently
printMany("no extras here", 5, "ayo????")

// functions can have variable amount of parameters
// newer and more modern version of variable variables
function printValues(...values) {
    for (let value of values) console.log(value)
}

// this is also possible, shorthand version
// older version, not reccomended
function printSeveral() {
    for (let arg of arguments) console.log(arg)
}

printValues("Bing", "Bong", "Ding", "Dong")
printSeveral("Bing", "Bong", "Ding", "Dong")    // Still works and prints the given parameters

/*
    * Arrow Syntax (ES6)
    Syntax:
    let squared = x => x*x
*/

// Easy way to write a function that returns something
let add = (a,b) => a+b

// in these situations, it might me more useful to just use normal function syntax
let printSoMany = (s, n=5) =>  {
    while (n-- > 0) {
        console.log(s)
    }
}

// Example, sorting numerically and with less code
array = [100,11,10,13,1,2,20,7,8]
console.log("With normal .sort()", array.sort())
console.log("With better .sort()", array.sort((a,b) => b-a))

// way shorter than doing this
array.sort(function (a,b) {return b-a})


/*
    * Functional Programming
*/

function printArray(array) {
    console.log(array.toString())
}

let words = ["example", "bug", "error", "mistake", "success", "bug"]

console.log(words.filter(word => word === "bug" || word === "error")) // prints out bug and error
console.log(words.filter(word => word !== "bug" && word !== "error")) // prints out everyhting except bug and error

numberArray = [1,2,3,10,0,100]

console.log(numbers.map(number => number*number)) // runs the same function for every array element

// Runs a function for two elements at a time
// for example, summing up an arrays values
numberArray.reduce((x,y) => x+y)

// .flatMap can turn an array into a single variable
// like below, it splits array's strings from whitespaces and turns them into a single string
let sentence = ["Programming is hard work", "But rewarding"]
let flattened = sentence.flatMap(x => x.split(" "))

/*
    * Generator function
    Syntax:
    function* generatorName(params) {
        yield returnValue
        yield* anotherGenerator
    }
*/

function* generatorName(params) {
    yield returnValue
    yield* anotherGenerator
}
// another way of using it:
// more secure
let iter = generatorName(params) // makes the generator
iter.next().value   // returns next yield value

// calculating Fibonacci numbers using generator
function* fibGenerator() {
    let current = 0
    let next = 1
    while(true) {
        [next, current] = [next + current, next]
        yield current
    }
}

let fib = fibGenerator()
for (let i = 0; i<20; i++) {
    console.log(fib.next().value)
}

fib = fibGenerator()
for (let i of fib) {
    if (i > 70000) break
    console.log(i)
}