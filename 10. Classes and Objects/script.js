const student ={    //direct way of creating an object
    fullName: "Faiqa Batool",  //properties of an object
    marks: 94.4,
    printMarks: function(){   //method of an object
        console.log(`Marks is equal to ${this.marks}`);
    }
};

// prototype
// built-in methods of an object/arrays

// custom pototypes
const employee = {
    // two formats to define methods inside objects
    calcTax1(){
        console.log("Tax rate is 10%");
    },
    calcTax2: function(){
        console.log("Tax rate is 20 %");
    }
};

const karanArjun = {
    salary: 50000,
    calcTax1(){
        console.log("Tax rate is 5%");
    },
};

karanArjun.__proto__ = employee;

