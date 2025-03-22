// // Our First API
// let url = "https://catfact.ninja/fact";

// fetch(url).then(response => {
//     // console.log(response); // This will return a response object
//     // console.log(response.json()); // This will return a only promise
//     return response.json();
// })
// .then(data => {
//     console.log("data1 = ",data.fact);
//     return fetch(url);
// })
// .then(response => {
//     return response.json();
// })
// .then(data2 => {
//     console.log("data2 = ",data2.fact);
// })
// .catch((error) => {
//     console.log("Error - ", error);
// });

//  // -------------------------------------------------------------------------------------------------------------
// // api uusing fetch 
// let url2 = "https://catfact.ninja/fact";
// async function getFacts(){
//     try{
//         let res = await fetch(url2);
//         let data = await res.json();
//         console.log("data = ",data.fact);


//         let res1 = await fetch(url2);
//         let data1 = await res1.json();
//         console.log("data1 = ",data1.fact);
//     }catch(error){
//         console.log("Error - ", error);
//     } 
// }
// console.log(getFacts());


// // ------------------------------------------------------------------------------------------------------------------
// // api using  Axios
// let url3 = "https://catfact.ninja/fact";
// async function getFacts1(){
//         try{
//             let res1 = await axios.get(url3);
//             console.log(res1);
//             console.log(res1.data);
//             console.log(res1.data.fact);
//         }catch(error){
//             console.log("Error - ", error);
//         } 
//     }
// console.log(getFacts1());


// // api using  Axios and also use html 
// let btn = document.querySelector("button");

// btn.addEventListener("click", async()=>{
//     let fact = await getFacts2();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url4 = "https://catfact.ninja/fact";

// async function getFacts2(){
//         try{
//             let res2 = await axios.get(url4);
//             return res2.data.fact;
//         }catch(error){
//             console.log("Error - ", error);
//             return "No fact found";
//         } 
// }



// // headerss pass with in axios

// const url5 = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = {headers : {Accept : "application/json"}};
//         let result = await axios.get(url5, config);
//         console.log(result.data);
//     } catch(err) {
//         console.log(err);
//     }
// }



// Activity using Query Strings (search colleges of  any country)
let url6 = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let country = document.querySelector("input").value;
    // console.log(country);
    let collgesArray = await getColleges(country);
    show(collgesArray);
});
function show(collgesArray){
    let list = document.querySelector("#list");
    list.innerText = "";
    for (col of collgesArray){
        // console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
async function getColleges(country) {
    try {
        let result1 = await axios.get(url6 + country);
        return result1.data;
    } catch (err) {
        console.log("error: ", err);
        return [];
    }
}


btn.addEventListener("click", () =>{
    fetch(url)
    .then((Response) => Response.json()
    .then((data) => {
        let catagory = data.type;
        let setup = data.setup;
        let punchline = data.punchline;
        console.log(setup);
        console.log(punchline);
        document.querySelector("#list1").innerText = catagory;
        document.querySelector("#list2").innerText = setup;
        document.querySelector("#list3").innerText = punchline;
    }));
});