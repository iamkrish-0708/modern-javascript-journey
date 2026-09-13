const min = 1;
const max = 100;
let answer = Math.floor(Math.random() * (max - min + 1)) + min;

const guess=document.getElementById("guessio");
const submit=document.getElementById("submit");
const output=document.getElementById("output");
const reset = document.getElementById("reset");
let tries=0;

submit.onclick=function(){
    let userGuess = Number(guess.value);
    if (isNaN(userGuess)) {
        output.textContent = "Please enter a valid number!";
    }
    else if (userGuess < min || userGuess > max) {
        output.textContent = "Please enter a number between 1 and 100!";
    }
    else if (userGuess === answer) {
        tries=tries+1;
        output.textContent = `CORRECT! You guessed the right number in ${tries} tries.!`;
    }
    else if (userGuess < answer) {
        output.textContent = "TOO LOW! Try again.";
        tries=tries+1;
    }
    else if (userGuess > answer) {
        output.textContent = "TOO HIGH! Try again.";
        tries=tries+1;
    }
}
reset.onclick = function() {
    answer = Math.floor(Math.random() * (max - min + 1)) + min;
    tries = 0;
    guess.value = "";
    output.textContent = "GAME RESTARTED!";
}

