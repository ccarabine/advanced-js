/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];

let results = [];
for (let num of nums) {
    results.push(num * 2);
}
console.log(results);

// Using map()
const multByTwo = function(nums) {
    return nums * 2;
};
const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified w/ map()
const mapResults2 = nums.map(function(nums) {
    return nums * 2;
});
console.log(mapResults2);

// Simplfied w/ map() + arrow function
const mapResults3 = nums.map(num => num * 2);
console.log(mapResults3);


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
console.log(studentsWithIds);
/*
const studentsWithIds2 = students.map(student => {
    const obj1 = {};

    obj1[student.id] = student.id;
    obj1[student.name] = student.name;
    obj1[student.profession] = student.profession;
    obj1[student.skill] = student.skill;
    return obj1;
});
console.log(studentsWithIds2);
//Object.keys(students).map(function(key, index) { students[key].push });
console.log(students);*/