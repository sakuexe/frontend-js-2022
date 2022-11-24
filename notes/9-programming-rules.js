/*
    * Good programming rules
    Additional information
    -Functional Programming Principles in Javascript
    https://www.freecodecamp.org/news/functional-programming-principles-in-javascript-1b8fc6c3563f/
*/

let mostImportantRules = [
    // list of good programming rules, by Petri Kuittinen
    // 11.2022
    "1. Keep it simple, stupid (KISS)",
    // Yeah
    "2. Ideally each function and part of code does just one thing: input or output or logic",
    "Don't mix algorithmic logic with input/output",
    // with this, you would be able to build waaaay more effective algorithmic testing bots,
    // using only game logic, no graphics needed, if they are seperated
    "3. Don't repeat yourself (DRY) or Rule of Three (copy paste same code once, but not to three locations)",
    // for example: if you get an error, no need to fix multiple locations (Easier to maintain)
    "4. Don't fall for Not Invented Here (NIH) and reinventing the wheel",
    "and use well-proven and documented libraries",
    // "Did you know that there's a library for that?". It is more reliable and compatible
    "5. 90% of your time will be spent 10% of your code (Ninety-Ninety Rule)",
    // Most of the time will be used on a very small part of your code
    "6. Premature optimization is the root of all evil",
    // Optimization can make code very unreadable
    // You can make speed optimizations by turning global loops into local ones (memory location priority)
    "7. Write and document your code for others (even if you are programming alone)",
    // "What does this funcition do again?"
    "8. Be consistent in your naming and style",
    // Consistency is key, even if you aren't optimal
    // style guides are a very good idea for bigger projects
    // for example Google's style guide for javascript:
    // https://google.github.io/styleguide/jsguide.html
]

// ! Refactoring
// Meaning readjusting your code to be cleaner and better (and making more compact)
// almost always if you have extra time, it would be always recommended

// * Also to note in Javascript
// Javascript can sometimes throw errors if the naming of functions, variables and such is overlapping with default ones
// for example function reset() {} and window.reset