/**
 * creates a new array from calling a function for every array element.
 * map() calls a function once for each element in an array.
 * map() does not execute the function for empty elements.
 * map() does not change the original array.
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];

let results = [];
for (let num of nums) {
    results.push(num * 2);
}
//console.log(results); [ 2, 4, 6, 8, 10 ]

// Using map()
const multByTwo = function(nums) {
    return nums * 2;
};
const mapResults = nums.map(multByTwo);
//console.log(mapResults);


// Simplified w/ map()
const mapResults2 = nums.map(function(nums) {
    return nums * 2;
});
//console.log(mapResults2);

// Simplfied w/ map() + arrow function
const mapResults3 = nums.map(num => num * 2);
//console.log(mapResults3);


// With objects:
const students = [{
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skill: 'JavaScript'
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skill: 'HTML'
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skill: 'CSS'
    },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
//console.log(studentsWithIds);


//udemy
const items = [
    { cname: 'Bike', price: 100 },
    { cname: 'TV', price: 200 },
    { cname: 'album', price: 10 },
    { cname: 'Book', price: 5 },
    { cname: 'Phone', price: 500 }
];
const itemNames = items.map((item) => {
    return item.cname; // all the items that return true
});
console.log(itemNames);
//['Bike', 'TV', 'album', 'Book', 'Phone']

const itemNames1 = items.map((item) => {
    return item.price; // all the items that return true
});
console.log(itemNames1);
//[ 100, 200, 10, 5, 500 ]

const foundItem = items.find((item) => {
    return item.cname === 'album';
});
console.log(foundItem); //{ cname: 'album', price: 10 }