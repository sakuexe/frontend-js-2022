/*
    * Symbols
    - A symbol value is created by invoking the function Symbol, which dynamically
    produces an anonymous, unique value. A symbol may be used as an object property
    and create "hidden" properties
    -Symbols don't auto-convert strings
    -Symbol can have an optional description, but only for debugging purposes only.
    Symbols can be local or global.
    -Symbol Keys are ignored when iterating an object with for .. in loop

    Additional information:
    - JavaScript info Symbol
    https://javascript.info/symbol
*/

new_symbol = Symbol() // local symbol, no description
new_symbol2 = Symbol("description") // with description
new_symbol2.description
global_symbol = Symbol.for("global") // global symbol
Symbol.keyFor(global_symbol)    // a way to access global symbol registery

// Using Symbols
id = Symbol()   // local symbol with no description
id2 = Symbol("id")  // local symbol with description
id3 = Symbol("id")  // local symbol with description
console.log(id2)    // Symbol(id)
console.log(id2.description)    // "id"
console.log(id === id2)  // false
console.log(id2 === id3) // false
g = Symbol.for("name")
g2 = Symbol.for("name") // Global symbols with the same string are same
console.log(g === g2) // true
console.log(g) // Symbol(name)
console.log(Symbol.keyFor(g)) // "name"
console.log(Symbol.keyFor(id2)) // undefined

// Making things private with using only _ is just an idiom, not true private

// * Using symbols to make private values

privateMethod = Symbol("privateMethod")
privateAtrribute = Symbol("privateAtrribute")

class Person {
    constructor(name, age) {
        this.name = name
        this[privateAtrribute] = age
    }

    [privateMethod]() {
        console.log(this[privateAtrribute])
    }
    publicMethod() {
        this[privateMethod]()
    }
}

const peter = new Person("Peter", 25)
console.log(peter.name)
peter.publicMethod()
peter.privateMethod() // fails


// * Frozen Symbols
// With object freeze, you arent able to add more stuff to your objects

const DIRECTION = Object.freeze({
    UP: Symbol("up"),
    LEFT: Symbol("left"),
    DOWN: Symbol("down"),
    RIGHT: Symbol("right"),
})

const GAME_STATE = Object.freeze({
    START: Symbol("start"), // start "menu"
    GAME: Symbol("game"),   // level 1
    COMPLETE1: Symbol("complete1"), // level 1 completed
    GAME2: Symbol("game2"), // level 2
    WIN: Symbol("win"), // you won the game
    LOSE: Symbol("lose"), // game over
})

let playerDirection = DIRECTION.RIGHT
let gameState = GAME_STATE.START