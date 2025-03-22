// Visualizing the call Stack
function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}
three(); // the value is 3 

 //------------------------------------------------------------------------------------------------------------------------------
// CALLBACK HELL Asysnchronous problem
function savetoDb(data, success,  failure) {
    let internetSpeed = Math.floor(Math.random() * 10)+1;
    if (internetSpeed > 4) {
        success();
    } else  {
        failure();
    }
}

savetoDb(
    "apna College",
    () => {
        console.log("sucess1 : your data  saved");
        savetoDb(
            "hello woorld",
            () => {
                console.log("sucess2 : data2 saaved");   
                savetoDb(
                    "shobhit",
                    () => {
                        console.log("sucess3 : data3 saaved");   
                    },
                    () => {
                        console.log("failure3 : weak connection");
                    }
                );
            },
            () => {
                console.log("failure2 : weak connection");
            }
        );
    },
    () => {
        console.log("failure 1: weak connection data noe saved");
    }
);


//-----------------------------------------------------------------------------------------------------------------------------------


// CALLBACKS HELL solve using PROMISE object
function savedata(data) {
    return new Promise((resolve, reject) => {
        let speedofinternet = Math.floor(Math.random() *  10)  +1;
        if (speedofinternet >4){
            resolve("success : data was saved");
        }  else {
            reject("failure  : weak connection");
        }
    });
}
console.log(savedata());


//--------------------------------------------------------------------------------------------------------------------------------------
// CALLBACKS HELL solve by using PROMISES method of then() & catch().
function helldata(data) {
    return new Promise((resolve, reject) => {
        let hellSpeed = Math.floor(Math.random() *  10)  +1;
        if (hellSpeed >4){
            resolve("success : data was saved");
        }  else {
            reject("failure  : weak connection");
        }
    });
}

helldata("kumarshobhit")
.then(() => {
    console.log("promise resolved");
})
.catch(() => {
    console.log("promise rejected");
});

// ---------------------------------------------------------------------------------------------------------------------------------------
// improved version of promise (method chaining)
// Final code and efficient and readable code
function improveddata(data) {
    return new Promise((resolve, reject) => {
        let netspeed = Math.floor(Math.random() *  10)  +1;
        if (netspeed >4){
            resolve("success : data was saved");
        }  else {
            reject("failure  : weak connection");
        }
    });
}
improveddata("kumarshobhit")
.then(() => {
    console.log("data 1 saved");
    return improveddata("hello world");
})
.then(() => {
    console.log("data 2 saved");
    return improveddata("shobhit");
})
.then(() => {
    console.log("data 3 saved");
    return improveddata("shobhit");
})
.then(() => {
    console.log("data 4 saved");
})
.catch(() => {
    console.log("promise rejected");
});

//---------------------------------------------------------------------------------------------------

// Result & Error handling in promise
function resultdata(data) {
    return new Promise((resolve, reject) => {
        let netofspeed = Math.floor(Math.random() *  10)  +1;
        if (netofspeed >4){
            resolve("success : data was saved");
        }  else {
            reject("failure  : weak connection");
        }
    });
}
resultdata("kumarshobhit")
.then((result) => {
    console.log("data 1 saved");
    console.log("result of promise : ",result);
    return resultdata("hello world");
})
.then((result) => {
    console.log("data 2 saved");
    console.log("result of promise : ",result);
    return resultdata("shobhit");
})
.then((result) => {
    console.log("data 3 saved");
    console.log("result of promise : ",result);
    return resultdata("shobhit");
})
.then((result) => {
    console.log("data 4 saved");
    console.log("result of promise : ",result);
})
.catch((error) => {
    console.log("promise rejected");
    console.log("error of promise : ",error);
});


// Automatic color change of H1 tag by using promises
h1 = document.querySelector("h1");
function changeColor(color, delay) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            h1.style.color =  color;
            resolve("color changed");
        },delay);
    });
}
changeColor("red",1000).then(() => {
    return changeColor("orange",1000);
})
.then(() => {
    return changeColor("green",1000);
})
.then(() => {
    return changeColor("blue",1000);
})
.then(() => {
    return changeColor("yellow",1000);
})
.then(() => {
    return changeColor("pink",1000);
})
.then(() => {
    return changeColor("brown",1000);
})
.then(() => {
    return changeColor("skyblue",1000);
});
