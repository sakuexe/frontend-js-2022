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

