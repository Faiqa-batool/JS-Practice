// Qs 1: Get user to input a number using prompt(“Enter a number: ”). Check if the number is a multiple of 5 or not.

let userInput = prompt("Enter a number: ");
if (userInput % 5 === 0){
    console.log("The ", userInput, "is a multiple of 5");
}
else{
    console.log("The ", userInput, "is not a multiple of 5");
}

// Qs 2: to give grade to students:

let score = prompt("Enter your score:");

if (score <= 100 || score >= 80){
    console.log("Congratulations! You've got a 'A' grade");
}
else if(score <= 79 || score >= 70){
    console.log("Congratulations! You've got 'B' grade");
}
else if(score <= 69 || score >= 60){
    console.log("You've got 'C' grade");
}
else if(score <= 59 || score >= 50){
    console.log("You've got 'D' grade");
}
else if(score <= 49){
    console.log("I'm sorry! You ]'ve got 'F' grade");
}

