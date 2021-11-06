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
        results: { science: 93, english: 80, art: 95 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 63, maths: 87, art: 95 },
    }
];


let subjects = [...students[0].subjects]; //a copy of the subjects array from the first object in the students array
console.log(subjects); //[ 'maths', 'english', 'cad' ]

const update = (item, val) => [...item, val]; //arrow function

let updatedSubjects = update(subjects, "Electronics"); //[ 'maths', 'english', 'cad', 'Electronics' ]

console.log(updatedSubjects);