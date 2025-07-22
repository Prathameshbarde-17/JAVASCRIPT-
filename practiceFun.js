/*
//Crete a Function
function myString(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "i" ||
      char === "e" ||
      char === "v" ||
      char === "o"
    ) {
      count++;
    }
  }
  console.log(count);
}*/
/*
//Arrow Function Question

const arrowString = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "i" ||
      char === "e" ||
      char === "v" ||
      char === "o"
    ) {
      count++;
    }
  }
  console.log(count);
};
*/
//Function create

function addition(a, b) {
  console.log(a + b);
}
addition(10, 20);
addition(20, 20);
addition(30, 20);

//Without Function Parameter

function print10Number() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
console.log("*****************First Call*****************");
print10Number();
console.log("*****************Second Call*****************");
print10Number();
console.log("*****************Third Call*****************");
print10Number();

//Return Keyword

function add(a, b) {
  return a + b;
}
let total = add(10, 20);
console.log("Result=" + total);

// Example Factorial Function

function factorial(a) {
  if (a < 1) {
    return 1;
  }
  let fact = 1;
  for (let i = 2; i <= a; i++) {
    fact *= i;
  }
  return fact;
}
let result = factorial(5);
console.log("Factorial=" + result);
