/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

//Destructuring gives us a faster way to take an array of items and turn those items into distinct, individual variables.  
// Destructuring arrays
let ages = [30, 26, 27];

let john = ages[0];
let mary = ages[1];
let joe = ages[2];
console.log(john, mary, joe);

let [john2, mary2, joe2] = ages; //30 26 27
console.log(john2, mary2, joe2);


// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
//let mike = jobs.mike;
//let jill = jobs.jill;
//let alicia = jobs.alicia;


let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia); //designer developer accountant


// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanase"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages; //spanish german  miss out position 1 and 2
console.log(maryNative, marySecondary);

let language2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese",
};
let { firstLanguage, thirdLanguage } = language2; //english german
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite); //apple
console.log(secondFavorite); //orange
console.log(others); //[ 'banana', 'peach', 'cherry' ]

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak ",
};
let { brian, anna, ...rest } = favoriteFoods;
console.log(brian); //pizza
console.log(anna); //pasta
console.log(rest); //{ sarah: 'vegetarian', andrea: 'steak ' }