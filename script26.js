// // Async keyword
// async function greet() {
//     // throw  "404 page not found"; // this line provide an error 
//     return "hello";
// }
// greet().then((result) => {
//     console.log("Promise was resolved");
//     console.log("result was : ",result);
// })
// .catch((error)  =>{
//     console.log("promise was rejected with error : ", error);
// });


// // Async keyword by using arrow function
// let demo = async () => {
//     return 5;
// };
// console.log(demo());

// /// Automatic color change of H1 tag by using promises and asyns & await keword
// h1 = document.querySelector("h1");
// function changeColor(color, delay) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             h1.style.color =  color;
//             resolve("color changed");
//         },delay);
//     });
// }
// async function change(){
//     await changeColor("red",1000);
//     await changeColor("blue",1000);
//     await changeColor("green",1000);
//     await changeColor("yellow",1000);
//     await changeColor("pink",1000);
//     await changeColor("skyblue",1000);
//     changeColor("lightblue",1000);
// }
// console.log(change());


//handling rejections of Await keyword
h1 = document.querySelector("h1");
function colorChange(color, delay) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            let num = Math.floor(Math.random()*5)+1;
            if (num>3){
                reject("promise rejected");
            }
            h1.style.color =  color;
            resolve("color changed");
        },delay);
    });
}
async function change1(){
    try {
        await colorChange("red",1000);
        await colorChange("blue",1000);
        await colorChange("green",1000);
        await colorChange("yellow",1000);
        await colorChange("pink",1000);
        await colorChange("skyblue",1000);
        colorChange("lightblue",1000);
    } catch(err){
        console.log(err);
    }
}
console.log(change1());