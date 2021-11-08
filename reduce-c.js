let students = [{
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 },
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 73, art: 95 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 93, english: 88, maths: 97, art: 95 },
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: { science: 'Iris', english: 'Joan', art: 'Simon' },
        results: { science: 93, english: 87, art: 95 },
    }
];


const biggest = students.reduce((acc, cur) => {
    acc = acc.max > cur.results.english ? acc : { name: cur.name, max: cur.results.english };
    return acc;
}, { name: '', max: 0 });
//console.log(biggest); { name: 'Adam', max: 88 }


//Using destructuring
/*
const biggest = students.reduce(({ max, name }, { name, results: { english } }) => {
    if (max < english) {
        acc = { name: name, max: english };
    }
    return acc;
}, { name: '', max: 0 });

console.log(biggest); * /

/*Steps
You will use the reduce method to execute a function on each item resulting in a single object. The object should be that of the student with the highest english score 
and should show the student's name and english score. 

You can either create the arrow function within the reduce method. or create an arrow function outside and pass it into the reduce method.
Keep an eye open for spots to use destructuring, You will not be tested to see if you have done this, but it would be good for getting in more practice.
1.Create a variable named biggest using the keyword const
2.Assign it a value from using the reduce method on the students array
3.Use either an arrow function inside the reduce method, or create a function and pass it into the reduce method
4.Use a default value with the reduce method
5.log out the variable biggest to see the value
*/

const items = [
    { name: "rice", price: 5 },
    {
        name: "book",
        price: 20
    },
    { name: "Chicken", price: 10 },
];
const totalPrice = items.reduce((total, item) => { // acc,curr
    return total + item.price;
}, 0);
//console.log(totalPrice); //35

const people = [
    { name: 'Kyle', age: 26 },
    { name: 'John', age: 31 },
    { name: 'Sally', age: 42 },
    { name: 'Jill', age: 42 },

];
const result = people.reduce((groupedPeople, person) => { // acc,curr

    const age = person.age;
    if (groupedPeople[age] == null) groupedPeople[age] = [];
    groupedPeople[age].push(person);
    return groupedPeople;
}, {});
//console.log(result); //141
/*{
  '26': [ { name: 'Kyle', age: 26 } ],
  '31': [ { name: 'John', age: 31 } ],
  '42': [ { name: 'Sally', age: 42 },   { name: 'Jill', age: 42 } ]
}*/
const numbers = [13, 2, 5];
const sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);
console.log(sum); //20