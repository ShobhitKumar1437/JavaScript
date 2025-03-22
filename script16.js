// //String method 

// let msg = "    hello  ";


// let password  = prompt("set your pssword ");
// let  newpass = password.trim();
// console.log(newpass);



// //upper and lower case 

// let msg  = "SHOBHIT KUMAR ";
// let msg1 = "shobhit kumar";
// console.log(msg.toLowerCase());
// console.log(msg1.toUpperCase());


// //String method with arguments 

// let ptr = "IloveCoding";
// ptr.indexOf("love"); // 1
// ptr.indexOf("L");  //-1(not found)
// ptr.indexOf("j");  //-1(not found)
// ptr.indexOf("o");  // 2


// //mehod chaining
// let  str = "     hello   ";
// let newstr = str.toUpperCase().trim();
// console.log(newstr);


// // Slice method
// let msg = "ApnaCollege";
// console.log(msg.slice(2));
// console.log(msg.slice(1,6));
// console.log(msg.slice(4, msg.length));
// console.log(msg.slice(-2)); // 11-2=>9


// //Replace method
// let msg = "Ilovecoding";
// console.log(msg.replace("love","do"));
// console.log(msg.replace("l","d"));


// // Repeat method
// let str = "mango";
// console.log(str.repeat(3));  //3 times mango


// // Practice 1.1
// // Q1 =>
// let msg = "help!";
// let newmsg = msg.trim().toUpperCase();
// console.log(newmsg);

// //Q2 =>
// let name1 = "apnaCollege";
// console.log(name1.slice(4,9));
// console.log(name1.indexOf("na"));
// console.log(name1.replace("apna","our"));

// //Q3 =>
// let name2 = "apnaCollege";
// let newname2 = name2.slice(4).replace('l','t');
// console.log(newname2);
// let newname3 = name2.slice(4).replace('l','t').replace('l','t');
// console.log(newname3);

// Array
// let students = ["shobhit","aman","kumar"];
// console.log(students);


// // Array method
// let cars = ["audi", "jeep", "toyota"];
// console.log(cars);
// cars.push("bmw");
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.shift();
// console.log(cars);
// cars.unshift("bmw");
// console.log(cars);

// // indexOf methd in an array
// let primary1 =  ["red", "green", "blue"];
// let secondry1 = primary1.indexOf("blue");
// console.log(secondry1);
// let secondry2 = primary1.indexOf("red");
// console.log(secondry2);
// let secondry3 = primary1.indexOf("green");
// console.log(secondry3);
// let secondry4 = primary1.indexOf("yellow");
// console.log(secondry4);
// let secondry5 = primary1.indexOf("Blue");
// console.log(secondry5);

// // Includes method
// let str = ["red", "green", "blue"];
// console.log(str.includes("red"));
// console.log(str.includes("yellow"));


// //  Concat in an array
// let primary =  ["red", "green", "blue"];
// let secondry = ["yellow", "black", "white"];
// console.log(primary.concat(secondry));
// console.log(secondry.concat(primary));
// console.log(primary.concat(primary));
// console.log(secondry.concat(secondry));

// // Revers in an array
// let rev =  ["red", "green", "blue"];
// console.log(rev.reverse());

// // Slice an array
// let colors =  ["red", "green", "blue", "yellow", "black", "white"];
// console.log(colors.slice());
// console.log(colors.slice(1,3));
// console.log(colors.slice(colors.length-1));
// console.log(colors.slice(colors.length-2));
// console.log(colors.slice(colors.length));
// console.log(colors.slice(6));
// console.log(colors.slice(-2));
// console.log(colors.slice(-1));


// // Splice in an array
// let color =  ["red", "green", "blue", "yellow", "black", "white"];
// console.log(color.splice(4));
// console.log(color);
// console.log(color.splice(0,1));
// console.log(color);
// console.log(color.splice(0,0,"grey","orange"));
// console.log(color);
// console.log(color.splice(1,0,"pink"));
// console.log(color);


// // Sort in an array
// let count = ['a','k','t', 'b', 'y', 'w'];
// console.log(count.sort());
// let marks = [100, 42, 89, 76, 99 ];
// console.log(marks.sort());// memory address ke hisab se arrange hotee hai 


// // Array references
// let arr =  ['a','b'];
// let  arrcopy = arr;
// console.log(arrcopy);
// console.log(arrcopy.push('c'));
// console.log(arrcopy);
// console.log(arr);
// console.log(arr == arrcopy);
// console.log(arr === arrcopy);
// console.log(arrcopy == arr);
// console.log(arrcopy == arr);


// // Nested array
// let nums = [[2,4],[3,6],[4,8]];
// console.log(nums);
// console.log(nums.length);
// console.log(nums[0]);
// console.log(nums[1]);
// console.log(nums[2]);
// console.log(nums[0].length);
// console.log(nums[1].length);
// console.log(nums[2].length);
// console.log(nums[0][0]);
// console.log(nums[0][1]);
// console.log(nums[1][0]);
// console.log(nums[1][1]);
// console.log(nums[2][0]);
// console.log(nums[2][1]);


// // Practice  Questions 
// //QUE 1=>
// let arr = [7,8,0,-2];
// let n =  3;
// let ans = arr.slice(0,n);
// console.log(ans);

// //QUE 2=>
// let arr1 = [7,8,0,-2];
// let n1 =  3;
// let ans1 = arr1.slice(arr1.length-n1);
// console.log(ans1);

// // Que 3=>
// let str = prompt("please enyer a strig")
// if(str == 0){
//     console.log("string  is empty");
// } else {
//     console.log("string is not empty");
// }


// // Que 5=>
// let ptr = prompt("please enyer a strig")
// console.log(`original string = ${ptr}`);
// console.log(`string without spaces = ${ptr.trim()}`);