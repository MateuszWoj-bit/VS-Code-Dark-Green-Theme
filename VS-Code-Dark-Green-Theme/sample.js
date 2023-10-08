// This is a single-line comment
/*
   This is a
   multi-line comment
*/

// Variables
let variableName = "Hello, world!";
const constantValue = 42;

// Keywords
if (variableName === "Hello, world!") {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

// Strings
const message = "This is a string";

// Functions
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

sayHello("Alice");

// Objects
const person = {
  name: "Bob",
  age: 30,
};

// Arrays
const numbers = [1, 2, 3, 4, 5];

// Template literals
const greeting = `Hello, ${person.name}!`;

// Regular expressions
const regex = /[A-Za-z]+/;

// ES6 arrow function
const add = (a, b) => a + b;

// Class definition
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(4, 5);
console.log(`Rectangle area: ${rectangle.area()}`);
