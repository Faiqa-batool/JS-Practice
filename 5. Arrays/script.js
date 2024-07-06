// Arrays
// let cities = ['Karachi', 'Lahore', 'Multan', 'Islamabad', 'Hyderabad'];

// for (let city of cities){
// 	console.log(city.toUpperCase());
// }

/*Qs 1 : For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class.*/

// let students = [85, 97, 44, 37, 76, 60];

// let s= 0;
// for(let student of students){

//     s+=student;
// }
// let num = students.length;
// let avg = s/num;

// console.log(`Average marks is ${avg}`);

/* Qs 2 : For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer. */

// method 1

let prices = [250, 645, 300, 900, 50];

// offer = 10;
// let finalPrice = [];
// let discount;
// let newPrice;

// for(let price of prices){
    
//     discount = (offer/100) * price;
//     newPrice = price - discount;
//     finalPrice.push(newPrice);
// }
// console.log(`The final price after applying discount is ${finalPrice}`);

// method 2

// for(let i = 0; i<prices.length; i++){
//     let discount= prices[i]/10;
//     prices[i] -= discount;
// }

// console.log(prices);


//splice()

// let arr = [1,2,3,4,5,6,7];

// replace elements
// arr.splice(2,2,101,102);

// add element
// arr.splice(2, 0, 101);

// delete elements
// arr.splice(3,1);


// Qs 3: Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
// a. Remove the first company from the array
// b. Remove Uber and Add Ola in its place
// c. Add amazon at the end

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// a
companies.shift();

// b
companies.splice(1,1,"Ola");

// c
companies.push("Amazon");
