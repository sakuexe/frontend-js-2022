/*
    * JavaScript Closures and Modules
*/

// What is a closure?
closure = {
    "1": "Closure is a nested function (inner function inside an outer function",
    "2": "The nested inner function must refer to a value defined in the enclosing function",
    "3": "The enclosing function must return the nested inner function",
    // closure means that an inner function always has access to the local variables and parameters
    // of its outer function, even after the outer function has returned
    // https://javascript.plainenglish.io/javascript-from-closure-to-modules-21d1ba30ab36
}

// closure example

function counter(init = 0) {
    var n = init
    // 1. nested function
    // 3. returns a function
    return () => n++
    /*
        above line is the same as
        return function increase() {
            return n++
        }
    */
}

c = counter()
console.log(c()) // 0
console.log(c()) // 1
console.log(c()) // 2
c2 = counter(10)
console.log(c2()) // 10
console.log(c2()) // 11

// Using closure to emulate private function

var counter = (function () {
    var privateCounter = 0
    function changeBy(val) {
        privateCounter += val
    }
    return {
        increment: () => changeBy(1),
        decrement: () => changeBy(-1),
        value: () => privateCounter,
    }
})()

console.log(counter.value()) // 0
counter.increment()
counter.increment()
console.log(counter.value()) // 2
counter.decrement()
console.log(counter.value()) // 1
console.log(counter.privateCounter)  // undefined
console.log(counter.changeBy(2)) // fails


// Arrow function closure example
function multiplier(x) {
    function multiply(y) {
        return x*y
    }
    return multiply
}
// is the same as
let multiplier = x => (y) => x*y
// first let's initialize the function and give it an "x" value
let m = multiplier(10)
// and then let's use the inner function to run the closure
console.log(m(1))
console.log(m(10))


// * Simplified module pattern
// with no information hiding

// a lot more condenced and easier to read
// global name space using objects
// works with any browser
var myModule = {
    variableName: variableValue,
    funcitonName: function() {
        // functionality
    }
}

myModule.variableName
myModule.funcitonName()


// * Javascript Modules
// ES6 offers more fine-grained way to import and export

import {name, name2} from './filename.js'
import * as NewName from './filename.js'
import {oldName as newName} from './filename.js'

// ! You need to use the following type of script in your HTML to enable module importing
// <script type="module" src="utils.js" defer>

// export keyword in filename.js tells the name that should be exported

// EXAMPLE

// utils.js
// const INCH_IN_CM = 2.54
// export function inchesToCM(inch) {
//     return inch * INCH_IN_CM
// }

// in another file
import { inchesToCm } from './utils.js'
// console.log(inchesToCm(12))
import * as Util from './utils.js'
// console.log(Util.inchesToCm(10))
import { inchesToCm as inchConversion } from './utils.js'
// console.log(inchConversion(12))

// ! JavaScript Module files can be written with .mjs
// although some tools may never support .mjs such as TypeScript

// * Ways to implement Modules

// Simplified Module pattern using object
// less name collisions
const myUtil = {
    INCH_IN_CM: 2.54,
    inchesToCM: function (inch) {
        return inch * this.INCH_IN_CM
    },
    cmToInches: function (cm) {
        return cm / this.INCH_IN_CM
    },
}

// Module Export for modern browsers
// ( in an utils file )
const INCH_IN_CM = 2.54
export function inchesToCm(inch) {
    return inch * INCH_IN_CM
}

export function cmToInches(cm) {
    return cm / INCH_IN_CM
}

// IN HTML:
// <script type="module">
    import { inchesToCm, cmToInches } from "./utils.js"
    console.log(inchesToCm(12))     // prints out 30.48
    import * as Util from "./utils.js"
    console.log(Util.inchesToCm(12))    // prints out 30.48
// </script>