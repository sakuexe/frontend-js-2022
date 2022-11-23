/*
    * Javascript Control Flow
    read more about it:
    - MDN Control Flow:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
    - Javascript.info if-else and switch-case:
    https://javascript.info/ifelse
    https://javascript.info/switch
*/

// Use disable cache from developer tools (will disable cache only when developer tools are open)
// ! In the source subpage, click on the row you want to add a breakpoint to, to debug more easily

// Ternary operator (shorthand conditional expression)
condition ? true_choice : false_choise

// Does the same thing as
if (condition) x = true_choice
else x = false_choice

let x
x = x ? x : "default value"

// Switch case
switch (variable) {
    case caseA:
        // Do Something
        break
    default:
        // reached if none of the above was true
        break
}

// Example
let variable = parseInt(prompt("Give me a number from 1-3", ""))
switch (variable) {
    case 1:
        alert("Selected 1")
        break
    case 2: // Fallthrough case
    case 3:
        alert("Selected 2-3")
        break
    default:
        // default is optional
        alert("Wrong selection")
        break
}

/*
    * Format output
*/

let kg = 50.125251
console.log(kg.toFixed(2) + "kg") // Formats the output to 2 decimals

// two ways to do a number conversion, they have different ways of working though
kg = Number(kg)
kg = parseFloat(kg)

kg = "a cat"
if (isNaN(kg)) console.log("please provide a valid floating number")