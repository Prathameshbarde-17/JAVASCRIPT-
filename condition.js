//Types of Condition
/**
 * If condition
 * Else Condition
 * Else If condtion
 * Switch Condition
 *
 */

//If condition-->
/*
let age = 17;

if (age < 18) {
  console.log("You can Not Voting", age);
}
if (age >= 18) {
  console.log("You can Voting",age);
}
*/

/*
let mode = "light";
let color;
if (mode === "dark") {
  color = "black";
}
if (mode === "light") {
  color = "white";
}
console.log(color);
*/

//2..Else Condition-->
/*
let age = 18;

if (age >= 18) {
  console.log("You can 18+ Video Watching..");
} else {
  console.log("You can Not Watch..");
}
*/

//Q..odd and even Numbers..
/*
let num = 2;
if (num % 2 === 0) {
  console.log("Even Number...", num);
} else {
  console.log("Odd Number...");
}
*/

//3..>Else IF Condition--->  Multiple time of the Else if condtion that show:
/*

let mode = "pink";
let color;

if (mode === "dark") {
  color = "black";
} else if (mode === "blue") {
  color = "blue";
} else if (mode === "pink") {
  color = "Pink";
} else {
  color = "White";
}
console.log(color);

*/

//4..>Switch Statement:
//
/*
let traficlight = "yellow";
let message;

switch (traficlight) {
  case "red":
    message = "You can Stop..";

  case "green":
    message = "You can Go...";

  case "yellow":
    message = "Prepare to stop...";
}

console.log(message);

*/

//second example of switch statement..

let day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid Number...");
}
