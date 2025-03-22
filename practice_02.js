// Q1
let num = 20;
if (num % 10 == 0){
    console.log("good");
}else {
    console.log("bad");
}

// Q2
let username = prompt("enter your name ");
let age = prompt("enter your age");
let user = (username + " is " + age + " years old.");
alert(user);


// Q3
let quarter = 1;
switch (quarter){
    case   1:
        console.log("jan", "fab", "mar",  "april");
        break;
    case   2:
        console.log("may", "jun", "jul",  "aug");
        break;
    case   3:
        console.log("sep", "oct", "nov",  "dec");
            break;
    default:
        console.log("wrong");
}


// Q4
let str = "apples";
if((str[0] = 'a' || start[0] == 'A')&&(str.length > 5) ){
    console.log("golden staring");
} else  {
    console.log("not a golden string");
}


// Q5
let a = 5;
let b = 9;
let c = 13;

if (a>b){
    if (a>c){
        console.log(a, " is largest");
    } else {
        console.log(c, "is largest");
    }
}else { 
    if(b>c){
        console.log(b, " is largest");
    } else {
        console.log(c, "is largest");
    }
}


// Q6
let num1 = 32;
let num2 = 47852;

if((num1%10) == (num2%10)) {
    console.log("numbers have the same last digit",num1%10);
}else{
    console.log("numbers don't have the same last digit");
}