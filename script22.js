// Practice Question
// add the following elements to the container using only JavaScript and the DOM methods.
// (1)-> a <p> with red text that says "Hey I'm red!"
// (2)-> an <h3> with blue text that says "Hey I'm blue h3!"
// (3)-> a <div> with a black border and pink background color with the following elements inside of it.
    // (i) anothe <h1> that says "I'm in a div"
    // (ii) a <p> that says "ME TOO!" 
// (1)-> 
let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector("body").append(para1); 
para1.classList.add("red");



// (2)->
let text = document.createElement('h3');
text.innerText = "Hey I'm  blue h3";
document.querySelector("body").append(text);
text.classList.add("blue");


// (3)-> 
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div";
para2.innerText = "MEE TOO";

div.append(h1);
div.append(para2);
div.classList.add("black");

document.querySelector("body").append(div);


// Qsl. Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me'
let input =  document.createElement("input");
document.querySelector("body").append(input);

let button = document.createElement("button");
button.innerText = "Click me!";
document.querySelector("body").append(button);

// Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// Change the id of button to "btn'
input.placeholder = "username";
button.id = "btn";


// Qs3. Access the btn using the querySelector and button id. Change the button background color to blue and text color to white.
document.querySelector("#btn");
btn.classList.add("btn");


// Qs4.Create an hl element on the page and set its text to "DOM Practice" underlined. Change its color to purple.
let hey = document.createElement("h1");
hey.innerText = "DOM Practice";
document.querySelector("body").append(hey);
hey.classList.add("underline");


// 
let tag = document.createElement('p');
tag.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(tag);
