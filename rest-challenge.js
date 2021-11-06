let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];
let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => {
    let sorted = [...arr, ...letters].sort().reverse();
    return sorted;
};

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');

console.log(reverseSort); //['o', 'n', 'm', 'l', 'k', 'j', 'i', 'h','g', 'f', 'e', 'd','c', 'b', 'a']
console.log(mixedLetters); //[ 'b', 'd', 'a', 'c', 'f', 'e' ]



//const updateSortReverse = (arr, letters, ...rest) => {
//   for (let i of rest) {
//         arr.push(i);
//           arr.sort();
//            arr.reverse();
/*
Create a variable named: moreMixedLetters using the keyword
let
Assign an array to the variable moreMixedLetters which should be a copy of the array mixedLetters and then the following values: 'h', 'k', 'g', 'j', 'i', 'l' (note steps 1 and 2 should be done on a single line)
log out moreMixedLetters
Create a variable named: updateSortReverse using the keyword
const
Assign the variable updateSortReverse an arrow function
The arrow function should take two parameters one named: arr and another named: letters which should use the rest parameter syntax
This arrow function should combine all the argument passed in into a single array and sort them and reverse them and then
return this array
Create a variable named reverseSort using the keyword let
Variable reverseSort should be assigned the return value from calling the updateSortReverse
function passing in the moreMixedLetters array and the string values: 'n', 'm', 'o'
log out the variable reverseSort to see its value
log out the variable mixedLetters to see that it has not been changed
if you have done everything correctly*/