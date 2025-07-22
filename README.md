# JAVASCRIPT-
JavaScript is a programming language used to make websites interactive (e.g., buttons, sliders, forms).
# Variables
Used to store data.
Example:
let name = "John";

# Data Types
String: "Hello"
Number: 42
Boolean: true or false
Array: [1, 2, 3]
Object: {name: "John", age: 30}
Null & Undefined

# Operators
Used to perform operations.
Example: +, -, *, /, ==, ===

# Functions
Reusable code blocks.
function greet() {
  console.log("Hello!");
}

# Conditions (if/else)
Used to make decisions.
if (age > 18) {
  console.log("Adult");
}
# Loops
Repeat code.
Types: for, while, do...while
for (let i = 0; i < 5; i++) {
  console.log(i);
}

# Events
Respond to user actions (click, hover, etc.)
button.onclick = function() {
  alert("Clicked!");
};

# DOM (Document Object Model)
Used to change HTML and CSS using JavaScript.
document.getElementById("demo").innerText = "Hello!";

# Objects
Store related data and functions.
let person = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log("Hi!");
  }
};

# Arrays
Lists of items
let colors = ["red", "green", "blue"];

# ES6 Features
Modern JS features:
let / const
Arrow functions: () => {}
Template strings: Hello ${name}
Destructuring
Spread/rest operators

# Callbacks, Promises, Async/Await
Used for handling asynchronous code (like API calls).
async function getData() {
  let res = await fetch("url");
}
