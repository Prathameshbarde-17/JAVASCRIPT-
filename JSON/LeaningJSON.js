//JSON

//JavaScript has a built in function for converting JSON strings into JavaScript objects:
//JSON.parse()

let text =
  '{"employees":[' +
  '{"firstName":"John","lastName":"Doe" },' +
  '{"firstName":"Anna","lastName":"Smith" },' +
  '{"firstName":"Peter","lastName":"Jones" }]}';

let obj = JSON.parse(text);
console.log(obj);

document.getElementById("demo").innerHTML =
  obj.employees[1].firstName + " " + obj.employees[1].lastName;

//SYNTAX OF JSON

//
const myObj1 = { name: "J", age: 30, city: "New York" };
document.getElementById("demo2").innerHTML = myObj1.name;

//Modifying Objects
const myObj = { name: "J", age: 30, city: "New York" };
myObj.name = "Gilbert";
document.getElementById("demo1").innerHTML = myObj.name;

//Data types in JSON

//1. a string
//2. a number
//3. an object (JSON object)
//4. an array
//5. a boolean
//6. null

//JSON ARRAY
let myArray = {
  employees: ["P", "A", "P"],
};
//JSON BOOLEANS
let Boleans = { sale: true };

//JSONObject
let Obj = {
  employee: { name: "P", age: 30, city: "N Y" },
};

//JSON Number
let number = { age: 22 };

//JSON Null
let Null = { name: null };

//JSON String
let string = { name: "P" };

//JSON Stringify()

//JSON.stringify() converts JavaScript objects into JSON strings.
//JSON.stringify() is the opposite of JSON.parse()

const myObj5 = {
  name: "John",
  age: 30,
  city: "New York",
};
const myJSON = JSON.stringify(myObj5);
document.getElementById("demo3").innerHTML = myJSON;

//Used of storing and retrieving data use of parse and stringify function

const myObj2 = { name: "JONHY", age: 22, city: "ENGLAND" };
const myJSON1 = JSON.stringify(myObj2);
localStorage.setItem("testJSON", myJSON1);

// Retrieving data:
let text1 = localStorage.getItem("testJSON");
let obj1 = JSON.parse(text1);
document.getElementById("demo4").innerHTML =
  "Name: " + obj1.name + " " + "Age: " + obj1.age + " " + obj1.city;
