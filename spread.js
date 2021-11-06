/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log("second array", arr2);
console.log("first array", arr1);

// Copying an array
arr3 = [4, 5, 6]; //third array [ 4, 5, 6 ]
let arr4 = [...arr3]; //copy the array
arr4.push(7); //fourth array[4, 5, 6, 7]

console.log("third array", arr3);
console.log("fourth array", arr4);

// Copying an object
let obj1 = { a: 1, b: 2, c: 3 }; //First Object: { a: 1, b: 2, c: 3 }
let obj2 = {...obj1, d: 4 }; //Second Object: { a: 1, b: 2, c: 3, d: 4 }
let obj3 = {...obj1, b: 5 }; //Third Object: { a: 1, b: 5, c: 3 }

console.log('First Onject:', obj1);
console.log('Second Onject:', obj2);
console.log('Third Onject:', obj3);

// Copying only part of an array/object

let arr5 = [...arr1, {...obj1 }, ...arr3, "x", "y", "z"];
console.log('fifth array:', arr5);