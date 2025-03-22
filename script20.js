// try & catch
console.log("hello");
console.log("hello");
// let a = 5;
try {
    console.log(a);
} catch (err){
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

// Arrow function
const sum = (a,b) => {
    return a+b;
}
console.log(sum(3,9));

// implicit return
const func = (a,b) =>  a*b
console.log(func(3,9));

// SetTimeout Function
console.log("hi there!");
setTimeout(()=> {
    console.log("apna college");
},4000);

console.log("welcome to!");


//SetInterval function
let id = setInterval(()=> {
    console.log("apna college");
},2000);

console.log(id);
clearInterval(id);// ye hota hai time korokne ke liye setinterval me 


// practice Ques
// write an arrow function that returns the square of a number n.
const square = (n) => {
    return n*n;
}
console.log(square(4));


// write a function that prints "Hello world" 5 times at intervals of 2s each.
let print = setInterval(() => {
    console.log("hello world");
}, 2000);
setTimeout(() =>{
    clearInterval(print);
    console.log("clear interval is run");
},10000);


const even = (a) => {
    if (a%2==0) {
        console.log("even");
    } else {
        console.log("not even");
    }
} 
console.log(even(9));

let num = 4;
const isEven = (num) => num %2==0;
console.log(isEven(num));


