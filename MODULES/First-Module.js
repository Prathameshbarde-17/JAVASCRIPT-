//Module
//File: First-Modules.js
//Modules are code block that can export and import function & value.

//Modules only work with HTTP protocol

//Modules operate in strict mode by default

//Export:--->
//Export is used to share value with other files
////Modules can Export :
// Variable,
// Function,
//Class
//Object

//Exporting a function
export function add(a, b) {
  return a + b;
}

//Exporting a constant value
export const PI = 3.14;

//Exporting a class
export class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

//Exporting a variable
export let counter = 2;
export function incrementCounter() {
  counter++;
}

//Default Export:--->
//A module can have only one default export

//Namespace Export:--->
//You can export all members of a module as a single object using namespace export
// (This is done during import using the * as syntax)
// Example: export * as MathUtils from './MathUtils.js';
// (This is done during import using the * as syntax)
