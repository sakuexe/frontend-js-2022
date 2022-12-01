/*
    * Regular Expressions in JavaScript

    additional information:
    -JavaScript Regular Expressions:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    -JavaScript info Regular Expressions:
    https://javascript.info/regular-expressions
    -Regular Expressions info with tutorials and examples:
    https://www.regular-expressions.info/
*/

// Syntax
/pattern/flags
new RegExp("pattern", "flags")

/*
    * Regex flags
    i = case insensitive
    g = global, look for all matches, otherwise just the first match
    m = multiline mode (affects only ^ $), with m those will match line breaks as well
    s = dot all mode, . will also match newline \n
    u = enable full Unicode support
    y = Enable sticky mode, search at exact position, good for efficency of long strings
*/

let m = "的脂肪编 and also 马卡帕卡".match(/\p{sc=Han}+/gu)
console.log(m) // 的脂肪编, 马卡帕卡

let str = "The End"
let regexp = /\w+/y
regexp.lastIndex = 3 // starting position
console.log(regexp.exec(str)) // null
regexp.lastIndex = 4 // starting position
console.log(regexp.exec(str)) // "End"

/**
    ^ beginning of string or after new line in multiline mode
    $ end of input or before newline character in multiline mode
    \b matches a word boundary
    \B matches a non-word boundary
*/

m = "JavaScript and Java".match(/Java/g)
console.log(m)  // ["Java", "Java"]
m = "JavaScript and Java".match(/\bJava\b/g)
console.log(m)  // "Java"

/*
    (x) - capturing group
    (?<Name>x) - named capturing group
    (?:x) - Non-capturing group. matches "x", but does not remember the match
    . - All characters, except newline (with s flag, it will also match the newlines)
*/

let results = "123 Cm, 55kg".matchAll(/(?<number>\d) (?<unit>[a-z]+)/gi)
for (let result of results) {
    let {number, unit} = result.groups
    console.log(number, unit)
}

const html = "<body><h1>This is a header!</h1><p>This is a paragraph!</p></body>"
console.log(html.match(/<.*>/g)) // greedy version, will match everything from first body to end of body
console.log(html.match(/<.*?>/g)) // non-greedy version, it will only match the tags themselves

// * Regex methods
regexp.exec("string") // Return array of matches or null
regexp.test("string") // return true if matches the string

const regex1 = RegExp("java", "gi")
const testString = "Languages: JavaScript, Python and Java"
let matches
while ((matches = regex1.exec(testString)) !== null) {
    console.log("Found:", matches[0], "Next one starts at", regex1.lastIndex)
}
let input = "12345"
if (/^\d+$/.test(input)) {
    console.log("input only has digits")
}

// * Regex String Methods
/*
    str.match(regexp) - Returns an array containing all the matches, including capturing groups or null
    str.matchAll(regexp) - Return iterator containing all the matches (needs to be looped through)
    str.search(regexp) - Return index of the match or -1 if search fails
    str.replace(regexp, replacedWith) - Return new String where regexp matches has been replaced
    str.replaceAll(regexp, replacedWith) - Return new String where all of the regexp matches has been replaced
    str.split(delim) - Return an array of string, after splitting string into substring based on deli
*/

let sentence = "Programming is \nEasy"
console.log(sentence.search(/is/)) // 12
let words = sentence.split(/\s+/)
console.log(words.join("_")) // Programming_is_easy

// * String Replace Patterns
/*
    $$  - inserts $
    $&  - inserts the matched substring
    $`  - inserts the portion of the string that precedes the matched substring
    $'  - inserts the portion of the string that follows the matched substring
    $n  -inserts n:th (positive integer) paranthesized substring
    $<Name> - inserts the named capturing subgroup
*/
let myname = "Saku Karttunen"
// looking for at least one alphanumeric character, followed by whitespace, followed by another group of 1+ characters
let s = myname.replace(/(\w+)\s(\w+)/, "$2, $1")
console.log(s) // "Karttunen, Saku"

// ! .replaceAll() also works with just strings
console.log(myname.replaceAll("S", "M")) // "Maku Karttunen"

// ! In html customize error message text with the title attribute <input type="text" title="please reply correctly, stupid">

// * /^[ -~]{8,20}$/
// this will only allow ascii characters

// a nice way of showing all of the errors, instead of only showing one at a time
function validate(event) {
    let errors = []
    if ("this is an error") {
        errors.push("please don't put an error")
    }
    console.log((errors.length <= 0) ? "valid" : "invalid")
}