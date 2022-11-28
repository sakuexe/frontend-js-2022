/*
    * Javascript Scopes, var, let, const
    Read more about it:

*/

// * Scopes

// variable outside of function is ALWAYS global
var cat = "cat"
dog = "dog"

function testing() {
    // this is a global variable, since it doesn't have var/let/const keyword
    globalVariable = 0    
    // this function is local
    let localVariable = 0
}

for(let i=1; i<100; i++) {}
try {
    console.log(i)  // will give error, since it no longer exists
} catch {
    console.log("can't log 'i', since it's not a variable")
}

for(var i=1; i<100; i++) {}
console.log(i)  // will NOT give error, since it is declared with var

const ALLOWED_NAMES = ["Python", "Javascript"]
ALLOWED_NAMES.push("ECMAScript") // works!
ALLOWED_NAMES = ["PHP"] // will not work, since it is tryin to reassign the value
// remember the difference between "pass by value" and "pass by reference"

// * Var, Let and Const

// var and no-keyword variables can be redeclared
var x = 4
var x = "cat"

// it is impossible to do with let or const
let y = 4
// let y = "dog"

// it is possible to do reassing let, var and none though
y = "catdog"

// let and const work like variables do in other languages, they are HIGHLY reccomended

// * Hoisting
// automatically moves var declarations on top and is called hoisting

function printLateVariable() {
    console.log(lateVariable)
}
// this will work, since var declaration is hoisted to top of the file
printLateVariable()
var lateVariable = 5

// it is the same as
var lateVariable
function printLateVariable() {
    console.log(lateVariable)
}
printLateVariable()
var lateVariable = 5

/*
    ! TEMPORAL DEADZONE
    In ECMAScript 6, accessing a let or const variable before its declaration 
    (within its scope) causes a ReferenceError. The time span when that happens, 
    between the creation of a variable’s binding and its declaration, is called the temporal dead zone.
    https://2ality.com/2015/10/why-tdz.html
    -
    It is in place to make code more easy to read and lessens programming errors
*/