// for-of loop:

let str = "FaiqaBatool";

let size = 0;
for(let i of str){
    console.log("i =", i);
    size++;
}

console.log(size);

//for-in loop:

let student = {
    fullName : "Faiqa Batoo",
    age : 22,
    cgpa: 3.1,
    isPass: true
};

for(let key in student){
    console.log("key =", key, " value =", student[key]);
    //here key is a variable that's why no inverted commas
}

// Qs 1: Print all even numbers from 0 to 100:

let n= 100;
for(let i=0; i<=n+1;i++){
    if(i%2===0){    //even number
        console.log(i, " is an even number");
    }
}
