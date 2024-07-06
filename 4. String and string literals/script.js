// string:
let str = "FaiqaBatool";

console.log(str[8]); //o

// Template literals

let specialStr = `This is template literal`;

// example:
let obj = {
    item : "pen",
    price: 10
};

let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);
let str1 = "Faiqa\nBatool";

console.log(str1.length);

console.log(str1.toLocaleUpperCase());

console.log(str1.toLocaleLowerCase());

let str2 = "   Faiqa   Batool    ";
console.log(str2.trim());

let num = "0123456789";
console.log(num.slice(1,3));

console.log(str1.concat(num));   //can be done with "+" operator

console.log(num.replace("12", "fa"));

console.log(str.charAt(0));  //F
// tells the character of the string at given position

// Qs 1: Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname length.

let userName = prompt("Enter your Full name: ");

let nameLen = userName.length;

let username = "@" + userName + nameLen;

console.log(username);
