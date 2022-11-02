// --- Javascript Introduction and Basics 1-3 ---

// 'use strict' // at the beginning of the file, to assign it to strict mode

// Common conventions
let normalVariable = "camelCase"
const STATIC_VARIABLE = "value never changes"
let ClassName = {
    "what": "First letter capitalized",
    "whatFor": "For Objects"
}

// () used in functions
// [] indexing arrays, defining arrays
// {} objects, blocks

/* Reserved words in javascript
---
abstract 	arguments 	await* 	    boolean
break 	    byte 	    case 	    catch
char 	    class* 	    const 	    continue
debugger 	default 	delete 	    do
double 	    else 	    enum* 	    eval
export* 	extends* 	false 	    final
finally 	float 	    for 	    function
goto 	    if 	        implements 	import*
in 	        instanceof 	int 	    interface
let* 	    long 	    native 	    new
null 	    package 	private     protected
public 	    return 	    short       static
super* 	    switch 	    synchronized 	this
throw 	    throws 	    transient 	true
try 	    typeof 	    var 	    void
volatile 	while 	    with 	    yield
*/

let unknownValue = null
let unassignedValue = undefined

// strict mode removes automatic octave numbers, for example
console.log(012 + 1) // logs out: 11

// use e"number" to type big numbers
// Works like 10^"number"
console.log(5e6)   // logs out: 5000000

// % = modulo (remainder)
// ++ add one, -- substract one

let i = 0
i++ // gets counted as the last part of the calculation
++i // gets counted as the first part of the calculation

// gets very confusing very fast, try not to use outside of loops

// automatic conversions are in place when not using strict comparisons
console.log(2 == "2")   // true
console.log(2 === "2")  // false

// compares character by character, which string comes first alphabetically
console.log("is Apple smaller than banana?: ", "Apple" < "Banana")  // true

/*
Booleans - True / False Values
---
Any non-zero number is true, zero and not a number (NaN) are false
NaN is false

Any non-empty string is true, empty string is false

Any non-empty array is true, empty array is false
---! this is not true, ask Petri about it---
(array is an object in JS)

Object is ALWAYS true

Undefined and Null yield false

Comparison between Boolean and Number converts the Boolean to Number

Comparison between string and number converts String to Number
*/

console.log("Numbers: ", Boolean(0), Boolean(1))     // false, true
console.log("Strings: ", Boolean(""), Boolean("t"))  // false, true
console.log("Arrays: ", Boolean([]), Boolean([1]))  // true, true
console.log("Object: ", Boolean({}))                // true
console.log("undefined and null: ", Boolean(undefined), Boolean(null)) // false, false

console.log(Number(false), Number(true))            // 0, 1


// --- Javascript strings ---

/* 
https://javascript.info/string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

// Strings in JS are immutable and unicode
let string = "Hello world"
string[0] = "Y"     // ERROR: can't change string element

/* 
    .charAt(n)
    .charCodeAt(n)
    .concat(n, n1, n2,,,)
    .endsWith(searchString)
    .fromCharCode(c1, c2)
    .includes(searchString)
    .indexOf(substr, [start])
    .lastIndexOf(substr, [start])
    .match(regexp)
    .matchAll(regexp)
*/

console.log(
    "string = " + string + "\n",
    "Character at index 0, and it's unicode value \n",
    string.charAt(0),
    string.charCodeAt(0),
)

// Other useful stuff with strings

console.log(
    "Hello".concat("World"),             // HelloWorld, or just use +
    "Hello Mom".endsWith("om"),          // True
    "Hello Javascript".includes("Javascript"),   // True
    "Example".indexOf("x"),         // 1
    "example".lastIndexOf("e")      // 6, instead of 0
)

// Regex commands will be gone through later
// string.match(regexp) and string.matchAll(regexp)

/* 
    .repeat(count)
    .replace(regexp, replace with)
    .search(regexp)
    .slice(start, [end])
    .split(delimiter, [limit])
    .startsWith(searchString)
    .substr(from, [lenght])
    .substring(from, [to])
*/

let repeatedString = "Eat, sleep, Javascript, repeat".repeat(10) // repeated 10 times
let stringWithNumbers = "Here are some numbers: 1294 142 214 55 -100"

console.log(stringWithNumbers.replace(/-?\d+/g, "???"))

// return index of the matched regular expression = "string 100".search(/\+d/)

// remove wanted amount of characters at the start of string
console.log("...Remove the first 3 dots.".slice(3))
// .slice(start, [end]), end is not included
let subString = "Hello World".slice(0,5)    // "Hello"
subString = "Y" + subString.slice(1)        // "Yello"

// .split make an array out of string
let exampleString = "Here is a string".split(" ")
console.log(exampleString)
// .join, turn array back into a string, using wanted separator
exampleString = exampleString.join("_")
console.log(exampleString)

// .startsWith("") - returns true if string starts with given parameter
exampleString.startsWith("Here")    // true

/*
    .toUpperCase()
    .toLowerCase()
    .trim()
    .trimEnd()
    .trimStart()
*/

let userName = "   MaximumGamer    "
// trims out the starting and ending whitespaces, and makes it uppercase
console.log(userName.trim().toUpperCase())

// remove all whitespaces
let creditCard = "  1234 53798 52 7 98 22 "
creditCard = creditCard.replace(/\s+/g, "")
console.log(creditCard)

// add whitespaces to 4 groups
creditCard = creditCard.match(/\d{4}/g)
creditCard = creditCard.join(" ")
console.log(creditCard)

/*
    // !!! Remember to prefer converting datatypes manually, instead of playing with JavaScript-sillines
    // It will make it easier to read for others aswell (and is a lot less error-prone)
*/

pareseInt("3 cats") // 3
Number("3 cats")    // NaN

// string literals:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals