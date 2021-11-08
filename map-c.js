// Execute a function on all elements

let students = [{
    name: 'John',
    subjects: ['maths', 'english', 'cad'],
    teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
    results: { maths: 90, english: 75, cad: 87 },
}, {
    name: 'Emily',
    subjects: ['science', 'english', 'art'],
    teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
    results: { science: 93, english: 80, art: 95 },
}, {
    name: 'Adam',
    subjects: ['science', 'maths', 'art'],
    teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
    results: { science: 93, maths: 77, art: 95 },
}, {
    name: 'Fran',
    subjects: ['science', 'english', 'art'],
    teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
    results: { science: 93, english: 87, art: 95 },
}];

/*You will use destructuring assignment to create two variables and you will assign them values from calling the map method on the students array.The
function provided to the map method can either be created within the map method or outside and passed in but in either case, it should use an arrow function.
The map method should return an array for each item in the students array and this new array should contain two items the items name value and the items results value.
1.Create variables named john and rest using the destructuring assignment
2. Assign the variables values from calling the map method on the students array
3. Within the map method either use an arrow function or provide a function created outside of the map method (note this function should also be an arrow function)
4.Log out the variable named: john to see its value
5. Log out the variable named: rest to see its value*/


let [john, ...rest] = students.map(itm => [itm.name, itm.results]);
console.log(john);
console.log(rest);
/*
$ node map - c.js
['John', { maths: 90, english: 75, cad: 87 }]
    [
        ['Emily', { science: 93, english: 80, art: 95 }],
        ['Adam', { science: 93, maths: 77, art: 95 }],
        ['Fran', { science: 93, english: 87, art: 95 }]
    ]*/