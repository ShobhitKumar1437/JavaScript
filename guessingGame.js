const max = prompt("Enter a Maximum number");

const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the number");

while (true){
    if (guess == "quit"){
        console.log("User Quit");
        break;
    }

    if (guess == random){
        console.log("Congrats!! you are right! The random number was",random);
        break;
    }
    else if (guess < random){
        guess = prompt("Hint : your guess was too small.please try again!");
    }
    else {
        guess = prompt("Hint : your guess was too large. Please try again!");
    }
}