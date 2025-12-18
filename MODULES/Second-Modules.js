//File: Second-Modules.js
//Module

//Import -->
//Import is used to value from other files
//Modules can Import :
//Variable,
//Function,
//Class
//Object

//
//

//Importing the exported members from First-Modules.js
import {
  add,
  PI,
  Circle as Cir,
  counter,
  incrementCounter,
} from "./First-Modules.js";

//Using the imported function
console.log("Addition:", add(5, 3));

console.log("Value of PI:", PI);

const myCircle = new Cir(4);
console.log("Circle radius:", myCircle.radius);

console.log(counter);

incrementCounter();
console.log("Counter after increment:", counter);

//Namepace Import -->
//This is immutable object that contains all exports from a module

import * as Math from "./First-Modules.js";
console.log("Using Namespace Import:");
console.log("Addition1:", Math.add(20, 20));

//Default Import -->
//A module can have only one default export
//Dynamic Import -->
//Dynamic import allow you to load modules at runtime using import()
import("./First-Modules.js").then((module) => {
  console.log("Dynamic Import:");
  console.log("Addition2:", module.add(10, 15));
});

async function run() {
  const module = await import("./First-Modules.js");
  let result = module.add(2, 3);
  console.log("Dynamic Import using async/await:", result);
}
run();
