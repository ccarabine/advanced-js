/**
 * ES6 provides a new kind of parameter so-called rest parameter that has a prefix of three dots (...).
 *  A rest parameter allows you to represent an indefinite number of arguments as an array.
 * 
 * */

// Regular function call 
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum:", sum); // Sum: 6

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2:", sum2); //Sum2: 6

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
};
let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log("Sum3:", sum3); //Sum3: 21