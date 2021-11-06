let students = [{
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: { maths: 'Harry', english: 'Joan', cad: 'Paul' },
        results: { maths: 90, english: 75, cad: 87 },
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths', 'english', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon' },
        results: { science: 93, maths: 95, english: 80, art: 95 },
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: { science: 'Iris', maths: 'Harry', art: 'Simon' },
        results: { science: 63, maths: 79, art: 95 },
    }
];

const averagePoints = (arr, subject) => {
    let allResultsInSubject = 0;
    let q = 0;
    for (let i in arr) { //loop through the object students
        const studentObject = arr[i]; //access to each student
        let resultObject = studentObject.results; //values subject and grade for each student { maths: 90, english: 75, cad: 87 }
        console.log(resultObject);
        if (subject in resultObject) {

            oneResultInSubject = resultObject[subject];
            console.log(oneResultInSubject);
            q++;
            allResultsInSubject += parseInt(oneResultInSubject);
        }

    }
    console.log(`number of subject ${q}`);
    return allResultsInSubject / q;
};


let result = averagePoints(students, "english");
console.log(result);