//Multi-dimensional Array

//Creates Array:
//First Method:
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [11, 22, 33, 44, 55];
let arr3 = ["A", "B", "C", "D", "E"];
let arrays = [arr1, arr2, arr3];
console.log(arrays);
//Second Method:
let salary = [
  [1, 2, 3, 4, 5],
  [11, 22, 33, 44, 55],
  ["A", "B", "C", "D", "E"],
];
console.log(salary);
//Index:
//Inner Array
console.log((salary[0][2] = "a"));
//Outer Array
console.log(salary[0].push("A"));

//Question :-

const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
console.log(arrayOfOddNumbers.length);

// Question:-2

// Write a simple JavaScript programto join all elements ofthe following
// array into a stringSample array: m
// yColor = ["1", "2", "3", "Black"];
// Expected Output:"1,2,3,Black"
