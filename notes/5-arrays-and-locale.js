
// 5.) Javascript Arrays and Locale

/* 
    * Additional information
    - Javascript.info arrays and array methods:
    https://javascript.info/array   https://javascript.info/array-methods
    - TechOnTheNet JavaScript String.localeCompare:
    https://www.techonthenet.com/js/string_localecompare.php
    - ISO Language Code Table:
    http://www.lingoes.net/en/translator/langcode.htm
*/

/* 
    ! Some useful array methods 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

let array = []

array.push(15) // array == [15]
array.unshift("Suspect") // array == ["Suspect", 15]
array.reverse()     // array == [15, "Suspect"]
array.push(10, 11, 12, 13)
array.slice(1, 4)   // returns ["Suspect", 10, 11]

b = array.slice(0)      // a shallow copy of array

array = [0, 10, 20, 10]
array.indexOf(10) // == 1
array.lastIndexOf(10) // == 3

array = [1, 12, 30, 55]
console.log(array.reduce((x, y) => x+y)) // returns the sum of array items


/* 
    ! SORTING
*/

// .sort() sorts in ALPHABETICAL order

function compareNumbers(a,b) {return a-b}
let numberArray = [-2, 0, 100, 124, 4, 1, 4.66, 51]
numberArray.sort(compareNumbers) // this way the sorting is done numerically

// shorthand version with the same result
numberArray = [-2, 0, 100, 124, 4, 1, 4.66, 51]
numberArray.sort((a,b) => b-a)

/* 
    LOOPING THROUGH ARRAYS
*/

for (let number of numberArray) console.log(number)

numberArray.includes(100) // returns true

let nameArray = ["Jack", "Mark", "Arin", "Danny", "Matt", "Jack"]
// remove wanted elements from array
nameArray = nameArray.filter(x => x !== "Jack")

/* 
    ! LOCALE 
    "Locale is a set of parameters that defines the user's language, region 
    and any special variant preferences that the user wants to see in 
    their user interface, such as:"
    -Number format setting
    -Character classification, case conversoin
    -date-time format setting
    -string collation (sorting) setting
    -currency format setting
*/

let numberExample = 1452.72
console.log(numberExample.toLocaleString("en")) // "1,452.72"
console.log(numberExample.toLocaleString("de")) // "1.452,72"
console.log(numberExample.toLocaleString("fi")) // "1 452.72"

nameArray = ["Aino", "Wille", "Valtteri", "Ville", "Viivi", "Örkki", "Paavo", "örkki", "aito", "uber", "über"]

// Sort in the localized way
nameArray.sort()
console.log("english order:\n", nameArray.sort((a,b) => a.localeCompare(b, "en")))
console.log("denmark order:\n", nameArray.sort((a,b) => a.localeCompare(b, "de")))
console.log("finnish order:\n", nameArray.sort((a,b) => a.localeCompare(b, "fi")))
nameArray.sort((a,b) => a.localeCompare(b, "de"))
nameArray.sort((a,b) => a.localeCompare(b, "fi"))

// * Better performance on large arrays
nameArray.sort(new Intl.Collator("fi").compare)
console.log(nameArray)