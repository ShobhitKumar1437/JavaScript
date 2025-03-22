// For Loop 
for (let i=1; i<=5; i++){
    console.log(i);
}

// Print all odd numbers between 1 to 15
for (let i =1; i<=15; i=i+2 ){
    console.log(i)
} 

// Print all odd numbers between 15 to 1
for (let i =15; i>=1; i=i-2 ){
        console.log(i)
} 


// Print all even numbers between 2to 10
for (let i =2; i<=10; i=i+2 ){
    console.log(i)
}

// Print all even numbers between 10 to 2
for (let i =10; i>=2; i=i-2 ){
    console.log(i)
}

// print multplication table of 5
for (let i =5; i<=50; i=i+5 ){
    console.log(i)
}

// print multplication table take input from user
let n = prompt("enter the number");
n = parseInt(n);
for (let i =n; i<=n*10;  i=i+n){
    console.log(i);
}


//Practice
//QUE => 1
let arr = [1,2,3,4,5,6,2,3]
let num = 2;
for (let i=0; i<arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}
console.log(arr);


//QUE => 2
let number = 287152;
let count = 0;
let copy = number;
while(copy >0){
    count++;
    copy  = Math.floor(copy/10);
}
console.log(count);


//QUE => 3
let numbers = 287152;
let sum = 0;
let cpy = numbers;

while(cpy>0){
    digit = cpy%10;
    sum = sum + digit;
    cpy =  Math.floor(cpy/10);
}
console.log(sum);


// print the factorial of a number n.
let  fact = prompt("enter a positive integer");
fact = parseInt(fact);
let factorial = 1;
for(let i = 1; i<=fact;i++){
    factorial = factorial*i;
}
console.log(`factorial of ${fact} is ${factorial}`);


let raa =  [2,5,10,4,23,1,9];
let largest = 0;

for(let i = 0; i<raa.length; i++){
    if(largest< raa[i]){
        largest = raa[i];
    }
}
console.log(largest);



// -------------------------------------------------------------

//Js basic solution for hackerrank
// function logger(message) {
//     console.log(message.text);
// }
// function joinedLogger(level, sep) {
//     return function(...messages) {
//         const filteredMessages = messages.filter(message => message.level >= level);
//         const joinedText = filteredMessages.map(message => message.text).join(sep);
//         logger({ text: joinedText });
//     };
// }
//--------------------------------------------------------------
// function stepCounter(k) {
//     const baseCounter = counter;
//     return {
//         increment: function() {
//             baseCounter.changeBy(k);
//         },
//         decrement: function() {
//             baseCounter.changeBy(-k);
//         },
//         getValue: function() {
//             return baseCounter.getValue();
//         }
//     };
// }
//--------------------------------------------------------------