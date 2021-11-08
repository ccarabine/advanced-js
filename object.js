const personOne = {
    fname: 'Kyle',
    age: 24,
    address: { city: 'Somewhere', state: 'One of them' }
};


const personTwo = {
    fname: 'Sally ',
    age: 32,
    favoriteFood: 'Watermelon',
    address: {
        city: 'somewhre else',
        state: 'Another one of them'
    }
};

const { fname: firstName, address: { city } } = personTwo;
console.log(city); //somewhre else
console.log(firstName); //Sallyconst 

const personThree = {...personOne, //copy the two objects
    ...personTwo
};
//console.log(personThree);
/*
{
  name: 'Sally ',
  age: 32,
  address: { city: 'somewhre else', state: 'Another one of them' },
  favoriteFood: 'Watermelon'
}

*/

function printUser({ fname, age, favoriteFood = 'watermelon' }) { // you can add a default like favoriteFood = 'watermelon' even if its not in the object
    //this is using destructing putting it in {} brackets so it has the object going in
    console.log(`Name is:${fname}. Age is ${age}. Food is ${favoriteFood}`);
}
//printUser(personOne); //Name is:Kyle. Age is 24. Food is watermelon

//udemy
const items = [
    { cname: 'Bike', price: 100 },
    { cname: 'TV', price: 200 },
    { cname: 'album', price: 10 },
    { cname: 'Book', price: 5 },
    { cname: 'Phone', price: 500 }
];
const filteredItems = items.filter((item) => {
    return item.price <= 100; // all the items that return true
});
console.log(filteredItems);
/* [
  { cname: 'Bike', price: 100 },
  { cname: 'album', price: 10 },
  { cname: 'Book', price: 5 }
]*/