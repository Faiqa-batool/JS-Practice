class Person{
    constructor(name){
        console.log("enter parent constructor");
        this.specie = "homo sapiens";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }

    work(){
        console.log("do nothing"); 
    }
}

class Engineer extends Person{
    constructor(name){
        console.log("enter child constructor");
        super(name);
        // this.branch = branch;
        console.log("exit child constructor");
    }
    work(){
        console.log("Solve problems, build something");
    }
}

class Doctor extends Person{
    work(){
        console.log("treat patients");
    }
}

let Faiqa = new Engineer("Faiqa");
Faiqa.work();
// Faiqa.super.work();

// let Ayesha = new Doctor();
// Ayesha.work();

// You can make objects as many as you want, using only one class.
