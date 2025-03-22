let a = 5;
let b = 10;
console.log(`You pay ${a+b} rupees`);

// Arithmetic Operators
let c = 22;
let d = 5;
console.log(c+d);
console.log(c-d);
console.log(c/d);
console.log(c*d);
console.log(c%d);
console.log(c**d);

// Unary Operators
console.log(c++); //10
console.log(++c); //12
console.log(d--); //5
console.log(--d); //3

// comperison operators
console.log(c>18);
console.log(d>=18);
console.log(d<18);
console.log(c<=18);
console.log(a==b);
console.log(c!=b);
console.log(a===b);

// comperison me == and === ka matlab
// ==
"123" == 123 //true
1 == "1" //true
0 == ' ' //true
0 == false //true
null == undefined //true

// ===
"123" === 123 //false
1 === "1" //false
0 === ' ' //false
0 === false //false
null === undefined //false

// comperison for non-numbers
'a' > 'A' //true
'a' > 'b' //false
'b' < 'c' //true
'B' < 'C' //true
'*' < '&' //false

//Conditional Statement
let age = 23;
if (age >= 18) {
    console.log("You can vote");
}

// practiece question traffic light system
let color = "red";
if (color === "red") {
    console.log("stop!")
}

if (color === "yellow") {
    console.log("slow down")
}

if (color === "green") {
    console.log("go")
}

// else if condition 
let age1 = 14;
if (age1 >= 18){
    console.log("You can vote");
} else if (age1 < 18){
    console.log("You can't vote");
} 

// Switch Statement
let day = 1;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesay");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("worng day!");
}


// Alerts and Prompt
alert("something is wrong!");
console.error("this is an error msg !");
console.warn("this is a warning msg");

let firstName = prompt("enter your first name");
let lastName = prompt("enter your last name");
let msg = "welcome" + firstName + lastName + "!";
alert(msg);

