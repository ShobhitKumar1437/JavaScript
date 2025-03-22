//Objects Literals
const student = {
    name : "shobhit",
    age : 21,
    marks : "81.81cgpa"
};

const item = {
    price : 100.99,
    discount : 50,
    colors : ["red", "green"]
};

// Create the object for the twitter post 
const post = {
    usrename : "@shobhit",
    content : "This is my #firstPost",
    likes : "1.5M",
    reposts : 5,
    tags : ["@cricket", "@rcb"]
};

// Get value from the object particular value
let value = {
    name : "shobhit",
    age : 21
};

// Add/Update value to the object
const update = {
    name : "shobhit",
    age : 21,
    marks : "81.81cgpa",// update.marks = "A";
    city : "Lucknow" // update.city = "mumbai";
}; // Add new key (gender)=>update.gender = "male";


// Object of Objects (nested objects)
const classInfo = {
    aman : {
        grade : "A+",
        city : "lucknow"
    },
    rohit :{
        grade :"A+",
        city : "mumbai"
    },
    virat : {
        grade :"A+",
        city : "delhi"
    },
};
 

// Array of objects 
const info = [
    {
        name :  "shobhit",
        city : "lucknow"
    },
    {
        name : "aman",
        city : "delhi"
    },
    {
        name : "virat",
        city : "mumbai"
    },
];


//Random Integers
let num = Math.random();
console.log(num);
num = num * 10;
console.log(num);
num = Math.floor(num);
console.log(num);
num = num + 1;
console.log(num);
// ya fir ese likh sakte hai (Math.floor(Math.random()*10)+1;)
let num1 =  Math.floor(Math.random()*10)+1;
console.log(num1);



// Generate a random number between 1 to 100
let rand =  Math.floor(Math.random()*100)+1;
console.log(rand);

// Generate a random number between 1 to 5
let rand1 =  Math.floor(Math.random()*5)+1;
console.log(rand1);

// Generate a random number between 20 to 25
let rand2 =  Math.floor(Math.random()*5)+20;
console.log(rand2);



// Practice QUESTIONS
// Que 1=>Create a program that generates a random number representing a dice roll.
//[The number should be between 1 and 6].
let diceroll = Math.floor(Math.random()*6)+1;
console.log(diceroll);



// Que 2=>Create an object representing a car that stores the following properties for the
//car: name, model, color.
//Print the car’s name.
let car = {
    name : "maruti",
    model : "Maruti Suzuki Dzire",
    color : "white" 
};
console.log (car.name);



// Que 2=>Create an object Person with their name, age and city.
//Edit their city’s original value to change it to “New York”.
//Add a new property country and set it to the United States.
let person = {
    name : "shobhit",
    age : "58",
    city : "london"
};
console.log(person);
person.city ="New York"
console.log(person);
person.country ="United states";
console.log(person);