//forEach
let arr = [1,2,3,4,5];
function print(el) {
    console.log(el);
}
arr.forEach(print);


// map
let num = [1,2,3,4,5];
let double = num.map(function(el){
    return el*2;
});
console.log(double);

//filter
let nums = [2,4,1,5,6,2,7,8,9];
let even = nums.filter((el)=> {
    return el%2==0;
});
console.log(even);


// every 
let ant = [1,2,3,4];
let x = ant.every((el) => (el%2==0));
console.log(x);


// some
let xyz = [1,2,3,4];
let y = xyz.some((el) => (el%2==0));
console.log(y);


// Reduce 
let numbers = [1,2,3,4];
let sum = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    return accumulator + currentValue;
});
console.log(sum);

// Finding the maximum element in an array using reduce
let numss = [5, 6, 2, 4, 1, 9,2,7,56,87];
let maxNum = numss.reduce((max, el) => {
    if(el>max) {
        return el;
    }
    return max;
});
console.log(maxNum);


// Check if all numbers in our array are multiples of 10 or not.
let numsss = [10,20,30,40,50];  
let ans = numsss.every((el) => (el%10==0));
console.log(ans);


//Create a function to find the min number in an array.
let newarr = [2,4,1,5,6,2,7,8,9];
function minNum(arr) {
    return arr.reduce((min, el) => {
        if(el<min) {
            return el;
        }
        return min;
    });
}
console.log(minNum(newarr));


// default parameters
function add(a,b=3){
    return a+b;
}
console.log(add(2));


//praactice 
// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

let numbers1 = [1,2,3,4,5];
let square = numbers1.map((el) => el*el);
let sum1 = square.reduce((acc, curr) => acc + curr);
let average = sum1 / numbers.length;
console.log(average);


// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.

let numbers2 = [1,2,3,4,5];
let newNumbers = numbers2.map((el) => el + 5);
console.log(newNumbers);

// Qs3. Create a new array whose elements are in uppercase of words present in the original array.

let words = ["apple", "banana", "cherry"];
let upperWords = words.map((el) => el.toUpperCase());
console.log(upperWords);

// Qs4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

function doubleAndReturnArgs(arr, ...args) {
    let newArr = [...arr];
    args.forEach((el) => newArr.push(el*2));
    return newArr;
}

console.log(doubleAndReturnArgs([1,2,3], 4, 5, 6)); // [1, 2, 3, 8, 10, 12]

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects(obj1, obj2) {
    let mergedObj = {...obj1, ...obj2};
    return mergedObj;
}

let obj1 = {a: 1, b: 2};

let obj2 = {c: 3, d: 4};

console.log(mergeObjects(obj1, obj2)); // {a: 1, b: 2, c: 3, d: 4}