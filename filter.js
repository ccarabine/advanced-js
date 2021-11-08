/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [{
        name: 'Michael',
        age: 23,
    },
    {
        name: 'Lianna',
        age: 16,
    },
    {
        name: 'Paul',
        age: 18,
    },
];

const filteredResults = people.filter(person => person.age >= 20);
//console.log(filteredResults); //[ { name: 'Michael', age: 23 } ]

const paulObj = people.filter(p => p.name === "Paul");
//console.log(paulObj);[{ name: 'Paul', age: 18 }]

const paulArray = people.filter(p => p.name === "Paul")[0];
//console.log(paulArray); { name: 'Paul', age: 18 }


// Complex Filtering
const students = [{
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
            { name: 'javascript', yrsExperience: 1 },
            { name: 'html', yrsExperience: 5 },
            { name: 'css', yrsExperience: 3 },
        ]
    },
    {
        id: 2,
        name: 'Ariel',
        profession: 'Developer',
        skills: [
            { name: 'javascript', yrsExperience: 0 },
            { name: 'html', yrsExperience: 4 },
            { name: 'css', yrsExperience: 2 },
        ]
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [
            { name: 'javascript', yrsExperience: 1 },
            { name: 'html', yrsExperience: 1 },
            { name: 'css', yrsExperience: 5 },
        ]
    },
];
/*1 st - write out the function*/
const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
});
/*console.log(candidates);
[{
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
            [Object],
            [Object],
            [Object]
        ]
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [
            [Object],
            [Object],
            [Object]
        ]
    }
]*/

/*2nd -put it in a function*/
const hasStrongSkills = student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
};

const candidates1 = students.filter(hasStrongSkills);
/*console.log(candidates1);
[{
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
            [Object],
            [Object],
            [Object]
        ]
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [
            [Object],
            [Object],
            [Object]
        ]
    }
]*/

//3 rd -MODEL ANSWER -break down into arrow functions
const has5yearsExp2 = skill => skill.yrsExperience >= 5;
const hasStrongSkills2 = student => student.skills.filter(has5yearsExp2).length > 0;
const candidates3 = students.filter(hasStrongSkills2);

/*console.log(candidates3);
[{
        id: 1,
        name: 'Mark',
        profession: 'Developer',
        skills: [
            [Object],
            [Object],
            [Object]
        ]
    },
    {
        id: 3,
        name: 'Jason',
        profession: 'Designer',
        skills: [
            [Object],
            [Object],
            [Object]
        ]
    }
]*/

let candidates_names = candidates3.map(itm => [itm.name]); //  to get just the names
/*console.log(candidates_names);
[
    ['Mark'],
    ['Jason']
]*/

/*
My goal is to create a list of job interview candidates by filtering out any students who
don’ t have at least 5 years of experience in at least one skill.So, when I’ m done,
I should be left with only Mark and Jason, since Ariel has a max of 4 years of experience.
    
The first thing we know we need to do is filter the students array, so let’ s start with
const candidates = students.filter().  I’ ll pass in an arrow function taking the student as a parameter,
and open a set of curly braces to contain its logic.Now, I’ m going to approach this by
filtering the inner skills array to only those skills with at least five years of experience.
I’ ll call those strong skills.and for each skill,
let strongSkills = student.skills.filter()
And
for each skill, we want to check
if skill.yrsExperience is greater than or equal to five.
This filter will return an array of only those skills in which the student has at least five years of experience.
In thecase of Ariel, it will just return an empty array, since none of her skills pass that test.
This is a key thing to realize, since now, all I need to do to return a true
or false result for the original filter is return whether strongSkills.length is greater than zero.*/