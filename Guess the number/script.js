// Qs 2: guess the game number:

let gameNum = 22;

let userNum = prompt("Guess the game number: ");
console.log("User Number is ", userNum);


while(userNum != gameNum){
    userNum = prompt("You guessed the wrong number. Guess the game number again: ");
}
console.log("Congratulations! You enetered the correct number");
