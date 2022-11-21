
// object oriented programming in javascript

// Add your own functions into an object
String.prototype.lastCharacter = function () {
  return this.charAt(this.length-1)
}

console.log("My last character".lastCharacter())  // logs out last character of string

// Classes should be written with a capitalized first letter
// for example, in older style:
function Account(amount) = {

  this.balance = amount

  this.deposit = function (amount) {
    this.balance += amount
  }

  this.deposit = function (amount) {
    this.balance += amount
  }
  
}

// in new ES6 style:
class Account {

  constructor (balance) {
    this.balance = balance
  }

  deposit (amount) {
    this.balance += amount
  }

  draw (amount) {
    this.balance -= amount
  }

}

// inheritance

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  live() {
    console.log("I have a life!")
  }
}

class Student extends Person {
  constructor(name, age, id) {
    super(name, age) // call the super/father class
    this.id = id
  }
  study() {
    console.log("All days only study and work. no life")
  }
  live() {
    console.log("I used to have a life, now only studying")
  }
}

// by writing a hashtag at the start of a variable,
// it becomes a private one
class PrivateTest {
  #privateVariable = "XXX"
  publicExposure() {
    return this.#privateVariable
  }
}

// Stack emulation as well as, set and get
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

let instance = new Stack()
instance.latest = 1
instance.latest = 2
console.log(instance.latest)  // 2
console.log(instance.latest)  // 1
console.log(instance.latest)  // undefined

//  easily make a new object
let userName = "FirstName"
let userAge = 21
let userAddress = "Viertolantie 16"
const student = {userName, userAge, userAddress}
