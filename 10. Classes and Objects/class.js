class toyotaCar{
    constructor(brand, mileage){
        // things we want to do while initialization
        console.log("creating new object");
        this.brand = brand;
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    // setBrand(brand){
    //     this.brandName = brand;
    // }
}

// creating object
let fortuner = new toyotaCar();
console.log(fortuner);
let corrolla = new toyotaCar("corrolla", 240);
console.log(corrolla);

class Parent{
    setEyeColor(eyeColor){
        this.eyeColor = eyeColor;
    }
    hello(){
        console.log("say hello");
    }
}

class Child extends Parent{
    useTech(){
        console.log("can use technology");
    }
}

let paras = new Child();

