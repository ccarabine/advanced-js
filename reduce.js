/**
 * The reduce() method executes a reducer function for each value of an array.
 * reduce() returns a single value which is the function's accumulated result.
 * reduce() does not execute the function for empty array elements.
 * reduce() does not change the original array.
 * command node reduce.js in the terminal
 */
// In this video, we’ve explored how we can use the reduce method to solve simple problems like summing an array of numbers.

// Summing an array of numbers:
const nums2 = [0, 1, 2, 3, 4];
let sum2 = nums2.reduce((acc, curr) => {
    console.log(
        "Accumulator: ", acc,
        "Current Value: ", curr,
        "Total: ", acc + curr
    );
    return acc + curr;
}, 0); //initail value   add more items into an existing array, or inject  additional properties into an existing object.
console.log(sum2);
/*
Accumulator:  0 Current Value:  1 Total:  1
Accumulator:  1 Current Value:  2 Total:  3
Accumulator:  3 Current Value:  3 Total:  6
Accumulator:  6 Current Value:  4 Total:  10
10
*/

//simplified
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 2);
//console.log(sum); //12  plus 2 at the start


const teamMembers = [{
        name: 'Andrew',
        profession: 'Developer',
        yrsExperience: 5
    },
    {
        name: 'Ariel',
        profession: 'Developer',
        yrsExperience: 7
    },
    {
        name: 'Michael',
        profession: 'Designer',
        yrsExperience: 1
    },
    {
        name: 'Kelly',
        profession: 'Designer',
        yrsExperience: 3
    }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
//console.log(totalExperience); //16

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        /*    I need to check whether the key already exists in the object we’ re going to be accumulating into.
         If it doesn’ t yet exist, I’ ll set it equal to curr.yrsExperience.*/
        acc[key] = curr.yrsExperience;
    } else {
        acc[key] += curr.yrsExperience;


    }
    return acc;
}, {}); //  after the comma a initial object
console.log(experienceByProfession);

/*
We’ve got two developers, totaling 12 years experience  and two designers totaling 4 years of experience.  
To accomplish this I first need to consider what  kind of result I want back, like an integer, an array, an object or something else.
 The type  of result I want back will determine the initial value I should start with. In this case, an  empty object is probably good, because then  
in the callback function we can add a developer  property and a designer property, and their values will be the total years of experience for each profession.

I’ll create a new variable  called experienceByProfession and set it to teamMembers.reduce, with an arrow  function and our initial value of an empty object.  

Just to be crystal clear, this first set of curly braces is the boundaries of the  callback function, and the second set after the  
comma is our initial value, an empty object.

This  is what the accumulator will be on the first pass. 
So at this point in the function, the accumulator  is an empty object and curr is the first team  
member in the array. So, if I want to create a  property in my object for Developer, I need to get  
curr.profession.

I’ll call this variable key. Now, I need to check whether the key already exists in the object we’re going to be accumulating into. 

If it doesn’t yet exist, I’ll set it equal to curr.yrsExperience. This means the first time  we see a new profession, that property will  
be added into the accumulator and its value  will be set to the team member’s experience.  

Otherwise, if the key does already exist, it’s as  simple as adding the current member’s experience to the already existing value. 
When I’m done, all  I’ve got to do is return the accumulator.


 In particular we looked at using it  to sum the total of a specific object property,  
and using it to restructure some data, organizing  our original teamMembers array by profession  
and totaling the experience for each profession.  



As a final thought experiment, 
consider some of the other ways you could  manipulate this teamMembers array using reduce.  
Think about how you could restructure it into  an object similar to the one we just created,  
but instead of totaling the experience for each  profession, you instead provide an array of the  
names of those employees. What about if there  were 100 employees and 20 different professions,  
and you wanted to filter out only the ones in a specific profession and find the one with the most experience?
All of this could be done using combinations of map, filter and reduce.
To quickly review, these last three methods  you’ve learned about, map, filter and reduce,  
are three of the most useful methods  when working with data in JavaScript.  
Not only do all three of them minimize the need  for complex, verbose for loops and while loops,  
but they can be used to manipulate and  restructure complex nested data structures  
in almost any way you can imagine. These three  methods are used commonly in advanced JavaScript,  
especially in modern front end frameworks  and libraries like AngularJS and ReactJS.  
This is the final video in the advanced JavaScript  module. If you want to know more about map,  
filter and reduce and how they can be used  to manipulate data, I highly recommend  
doing some Google and Youtube searches for  more examples and experimenting with them.  
Of course, I’d also recommend the same for the other  advanced topics we covered in this module.  
With this experience, you’ll be well on your  way to becoming an advanced JavaScript developer  
and working with the most modern  JavaScript frameworks, libraries and APIs.*/

//udemy
const items = [
    { cname: 'Bike', price: 100 },
    { cname: 'TV', price: 200 },
    { cname: 'album', price: 10 },
    { cname: 'Book', price: 5 },
    { cname: 'Phone', price: 500 }
];
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal; // all the items that return true
}, 0);
console.log(total);
//815