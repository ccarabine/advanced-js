/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers3(a, b) {
    //Code Block
    return a + b;
}

let sum3 = addTwoNumbers3(3, 5);
console.log(sum3);


// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
};

// Single Line Arrow Function With Parameters
const addTwoNumbers1 = (a, b) => a + b;
const addTwoNumbers2 = (a, b) => (a + b); //also valid

let sum1 = addTwoNumbers1(2, 4);
let sum2 = addTwoNumbers2(3, 5);

console.log(sum1);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!');

const sayHello = () => console.log('hello'); //with no parameters need to out ()
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
); //remember `

console.log(returnMultipleLines());