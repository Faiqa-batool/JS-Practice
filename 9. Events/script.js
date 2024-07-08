// event handling

let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("You clicked on a button in JS");
//     let a = 0;
//     a++;
//     console.log(a);
// }

let box = document.querySelector("div");

box.onmouseover = () => {
    console.log("You are inside div 2");
}

let handler1 = ()=>{
    console.log("Btn1 was clicked - handler 1");
}
// event listner
btn1.addEventListener("click", handler1);

btn1.addEventListener("click", ()=>{
    console.log("Btn1 was clicked - handler 2");
});

btn1.removeEventListener("click", handler1);
