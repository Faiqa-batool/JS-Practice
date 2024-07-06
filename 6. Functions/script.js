// function myFunction(){
//     console.log("Welcome to Faiqa's GitHub!");
//     console.log("We are learning JS!!!!");
// }

// myFunction();

// function myMsg(msg){    //parameter
//     console.log(msg);
// }

// myMsg("Hi! This is Faiqa Batool, and learning JS.");  //arguement

// function to calculate the sum of 2 numbers

// function sum(a , b){
//     s= a+b;
//     return s;
// }


// let val = sum(2, 4);
// console.log(val);

// arrow function
// const arrowSum = (a, b) => {
//     console.log(a+b);
// }


// const arrowMul = (x, y) => {
//     return x*y;
// }

// const helloPrint = () => {
//     console.log("Hello");
// }

// Qs 1: Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.

// let msg1 = "HellO";
// function numOfVowels(msg){
//     count=0
//     let words = msg.toLowerCase();
//     for(let word of words){
//         if (word === "a" || word === "e" || word === "i" || word==="o" || word==="u"){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(`The Number of Vowels in ${msg1}  is ${numOfVowels(msg1)}`);

// const arrowVowelCount= (msg)=>{
//     count=0
//     let words = msg.toLowerCase();
//     for(let word of words){
//         if (word === "a" || word === "e" || word === "i" || word==="o" || word==="u"){
//             count++;
//         }
//     }
//     return count;
// }

// callback functions

// let arr = [1,2,3,4,5];

// arr.forEach(function printValue(val){
//     console.log(val);
// });

// let arr1 = ["Karachi", "Lahore", "Islamabad"];

// arr1.forEach((val, idx, arr1)=>{
//     console.log(val.toUpperCase(), idx, arr1);
// })

// Qs 2: For a given array of numbers, print the square of each value using the forEach loop.

let nums = [1,2,3,4,5,6,7,8];

// nums.forEach((val)=>{
//     console.log(val*val);
// });

// Map method:

// let newArray= nums.map((val)=>{
//     return val*val;
// });

// console.log(newArray);

// filter method:

// let newArray1 = nums.filter((val)=>{
//     return val % 2 === 0;
// });
// console.log(newArray1);

// reduce method:

// let array1 = [1,2,3,4];

// sum of the array 

// const sumWithInitial = array1.reduce((result, Value)=>{
//     return result + Value;
// });

// console.log(sumWithInitial);

// larget number
// let nums1 = [5,6,1,4,2,0];
// const largestNum = nums1.reduce((prev, curr)=>{
//     return prev > curr ? prev: curr;
// });

// console.log(largestNum);

// practice questions:

// Q1: We are given array of marks of students. Filter our of the marks of students that scored 90+.

// let marks = [90, 100, 85, 56, 46, 91];

// const highMarks = marks.filter((val)=>{
//     return val > 90;
// });
// console.log(highMarks);

// Q2: Take a number n as input from user. Create an array of numbers from 1 to n.

let n = parseInt(prompt("Enter a number: "));

let array = [];
for (let i=1; i<n+1; i++){
    array.push(i);
}
// console.log(array);
// a. Use the reduce method to calculate sum of all numbers in the array.

const sumAllNums = array.reduce((prev,curr)=>{
    return prev + curr;
});
console.log(sumAllNums);

// b. Use the reduce method to calculate product of all numbers in the array.

const factorial = array.reduce((prev,curr)=>{
    return prev * curr;
});
console.log(factorial);
