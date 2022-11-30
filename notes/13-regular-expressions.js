/*
    * Regular Expressions
    Introduction to Regular Expressions
    a.k.a: Regexp or Regex
    additional information:
    -RegexLib.com Cheatsheet:
    https://regexlib.com/cheatsheet.aspx?AspxAutoDetectCookieSupport=1
    -Regex in Python:
    https://docs.python.org/3/library/re.html?highlight=regular%20expression
    -RegularExpressions.info
    https://www.regular-expressions.info/
    -RegularExpressions.info tutorial
    https://www.regular-expressions.info/tutorial.html
    -Top15 The Most Commonly Used Regex
    https://digitalfortress.tech/tricks/top-15-commonly-used-regex/

    ! Test your regexs' here:
    https://www.regextester.com/
*/

// Special characters in regex
".^$*+?{}[]()-\""

// for example, when you want to match floating point numbers
"3\.14"
// instead of
"3.14" // this catches 3 + any character +14

// * Start and end of string

"^" // = start of string
"$" // = end of string

let input = "ab"
/ab/g.test(input)   // returns true
input = " abs"
/ab/g.test(input)   // still returns true
"/^ab$/g".test(input)   // returns false

// Repetition
"*" // zero or more
// a*b matches b, ab, aab
"+" // one or more
// a+b matches: ab, aab
"?" // zero or one
// a?b matches: ab, b
"{n}" // matches specified amount
// a{3}b matches aaab
"{m,n}" // matches m to n copies
// a{2,4}b matches aab, aaab, aaaab
// a{3,} matches aaa, aaaa, ...

// * REGEX Flags
const flags = {
    "//g": "Test globally (more than just the first match)",
    "//m": "Test multiple lines instead of one",
    "//i": "ignore case sensitivity",
}

// * Character Ranges
// character range is written inside of []
[abcdef]
// is the same as
[a-f]
// match everything except these ones
["^a-f"]

// do not allow ä, ö, å or numbers
"/^[^äöå0-9]+$/g"

// allow only zip-codes with five numbers
"/[0-9]{5}/g"


// * Predefined Sequences
const predef = {
    "\d": "any decimal digit [0-9]",
    "\D": "any non-digit [^0-9]",
    "\s": "any whitespace [\t\n\r\f\v]",
    "\S": "any non-whitespace [^\t\n\r\f\v]",
    "\w": "any alphanumeric character [a-zA-Z0-9_]",
    "\W": "any none-alphanumeric character [^a-zA-Z0-9_]",
    // these can be used inside a character range
    // eg: [\s] will match any whitespace, comma or dot
}

// so with these, we can make our zip-code checker even smaller
"/^\d{5}/g"

// check that password is 8-10 characters long and only includes [0-9a-zA-Z]
"/^\w{8,10}$/igm"


// * Groups and Or
const groupsAndOr = {
    "()": "defines a group",
    "|": "or",
    "yes|no": "'yes' or 'no'",
    "100|[1-9]\d|[1-9]": "matches a number from 1-100 without leading zeros",
    "([a-z]+\d)+": "matches a1b2c3, aa1, abb2aa2",
}

"050-1234567".match(/(\d{2,4})-(\d{1,10})/g, "").groups()
// ('050', '1234567')
"050-1234567".match(/(\d{2,4})-(\d{1,10})/g, "").group(0)
// '050-1234567'
"050-1234567".match(/(\d{2,4})-(\d{1,10})/g, "").group(1)
// '050'
"050-1234567".match(/(\d{2,4})-(\d{1,10})/g, "").group(2)
// '1234567'


// * Non-Greedy Matching
// +,*,? and {m,n} qualifiers are greedy, they match as much text as possible
// <.*> matches an entite web page from <html> to </html> instead of single tag

// +?, *?, ?? and {m,n} are NON-greedy versions, they match as few characters as possible
// <.*?> will only match '<h1>' in '<h1>test</h1>'

const html = "<body><h1></h1><img src='imagehere.jpg'></body"
console.log(html.match(/<.*?>/g, ""))
// prints out <body> <h1> </h1> <img> </body>

const numbers = "here are some numbers: 1,2, 3, 50, -20,100, -600"
console.log(numbers.match(/-?\d/g))
// prints out "1, 2, 3, 50, -20, 100, -600"