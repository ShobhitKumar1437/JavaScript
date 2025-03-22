// // Function in JS
// function hello(){
//     console.log ("hello");
// }
// hello();


// function printName1(){
//     console.log("Shobhit kumar");
//     console.log("XYZ");
// }
// printName1();


// function print1to5(){
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }
// print1to5();

// function isAdult(){
//     let age = 18;
//     if(age >=18){
//         console.log("adult"); 
//     } else {
//         console.log("not adult");
//     }
// }
// isAdult();



// //Practice Question --------------------------------------------------------------
// // Create a function to roll a dice & always display the value of the dice(1 to 6).
// function rollDice(){
//     let rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();

// // Functions with arguments
// function printName(name){
//     console.log(name);
// }
// printName("shobhit");

// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}.`);
// }
// printInfo("shobhit",21);
// printInfo("shobhit");
// printInfo(21);// ye hamesa odered by save hoti hai jo pehle value bo pehla arguments


// //  Create a function that gives the average of 3 numbers.
// function calc(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
// }
// calc(5,3,7);

// // Return keyword
// function sum(a,b,c){
//     return (a+b+c);
    
// }
// console.log(sum(5,3,7));


// // create a function that returns the sum of numbers from 1 to n.
// function funcSum(n){
//     let sum = 0;

//     for (let i=1; i<=n; i++){
//         sum +=i;
//     }
//     return sum;
// }
// console.log(funcSum(6));


// // create a function that returns the concatenation of all strings in an array.
// let str = ["hii","hello","byy","!"];
// function concat(str){
//     let result="";

//     for (let i=0; i<str.length; i++){
//         result += str[i];
//     }
//     return result;
// } 
// console.log(concat(str));

// // What will be the output?
// let greet = "hello";

// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();

// // Mehods 
// const calculator = {
//     add : function(a,b){
//         return a+b;
//     },
//     subt : function(a,b){
//         return a-b;
//     },
//     multi : function(a,b){
//         return a*b;
//     }
// };
// console.log(calculator.add(1,2));
// console.log(calculator.subt(5,2));
// console.log(calculator.multi(8,2));


// Practice 

//QUE =>1 
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7]; 
let num = 5; //elements larger than a number num 
function getElements(arr, num) { 
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] > num) { 
            console.log(arr[i]);g 
        } 
    } 
} 
getElements(arr, num);


//QUE =>2
let str1 = "abcdabcdefgggh";
function getUnique(str1) {
    for (let i = 0; i < str1.length; i++) { 
        let currChar = str1[i]; 
        if (ans.indexOf(currChar) == -1) { 
             ans += currChar;
            } 
    } 
        let ans = "";
    return ans;
} 
getUnique(str1);


//QUE =>3
let country = ["Australia", "Germany", "United States of America"]; 
function longestName(country) { 
    let ansIdx = 0; 
    for (let i = 0; i < country.length; i++) { 
        let ansLen = country[ansIdx].length; 
        let currLen = country[i].length; 
        if (currLen > ansLen) { 
            ansIdx = i; 
        } 
    } 
    return country[ansIdx]; 
} 
longestName(country);

//QUE =>4
let str = "apnacollege"; 
function countVowels(str) { 
    let count = 0;
    for (let i = 0; i < str.length; i++) { 
        if ( str.charAt(i) == "a" || 
        str.charAt(i) == "e" || 
        str.charAt(i) == "i" || 
        str.charAt(i) == "o" || 
        str.charAt(i) == "u" ) 
        { count++; 
        } 
    } 
    return count; 
}


//QUE =>5
let start = 100; 
let end = 200; 
function generateRandom(start, end) { 
    let diff = end - start; 
    return Math.floor(Math.random() * diff) + start;
 }