//Arrays
//Create the arrays
let arr = ["P", "R", "A", "T", "H"];
console.log(arr);
//push array
arr.push("P");
console.log(arr);
//pop array
arr.pop();
console.log(arr);
//shift array:Remove first Element
arr.shift();
console.log(arr);
//Unshift Array:Add first element.
arr.unshift("P");
console.log(arr);
//Concat()Array : Two Array are join
let arr1 = ["M", "E", "S", "H"];
Mix = arr.concat(arr1);
console.log(Mix);
//sort Array
Mix.sort();
console.log(Mix);
//isArray()Array:
//indexOf Array
//arr.indexOf([1]);
//console.log(arr);
//Looping Array
//For Loop:-
for (i = 0; i < arr.length; i++);
console.log(i);
//For of Loop:-
for (let i of arr) {
  i = Mix.length;
  console.log(i);
}
//Practice Set-01;

const address = ["London ", "Michigan", "Mumbai", "Delhi"];
for (let addr of address) {
  alert(addr);
}
/* 

var personal = new Arays();
personal[0] = new Array();
personal[0][0] = "Rahul";
personal[0][1] = "18";
personal[0][2] = "London";
personal[1] = new Array();
personal[1][0] = "Sneha";
personal[1][1] = "17";
personal[1][2] = "Michigan";
personal[2] = new Array();
personal[2][0] = "Raj";
personal[2][1] = "19";
personal[2][2] = "Delhi";
document.write("Name:" + personal[1][0] + "<br>");
document.write("Age:" + personal[1][1] + "<br>");
document.write("Address:" + personal[1][2] + "<br>");
*/
/*
let personnel = new Array();
personnel[0] = new Array();
personnel[0][0] = "Rahul";
personnel[0][1] = "18";
personnel[0][2] = "London";
personnel[1] = new Array();
personnel[1][0] = "Sneha";
personnel[1][1] = "17";
personnel[1][2] = "Michigan";
personnel[2] = new Array();
personnel[2][0] = "Raj";
personnel[2][1] = "19";
personnel[2][2] = "Delhi";
document.write("Name: " + personnel[1][0] + "<br>");
document.write("Age: " + personnel[1][1] + "<br>");
document.write("Address: " + personnel[1][2] + "<br>");
*/
//practice No:-2

const address1 = ["London", "Michigan", "Delhi", "Mumbai"];
function isLong(addr1) {
  return addr1.length > 5;
}
const longer = address1.filter(isLong);
document.write(longer + "<br>");
address1.pop();
alert(address1.indexOf("pune"));
alert(address1.indexOf("Delhi"));

/*
const addresses = ["London", "Michigan", "Delhi", "Mumbai"];
function isLong(addr) {
  return addr.length > 5;
}
const longer = addresses.filter(isLong);
document.write(longer + "<br>");
addresses.pop();
document.write(addresses);
alert(addresses.indexOf("Pune"));
alert(addresses.indexOf("Delhi"));
*/
