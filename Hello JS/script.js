
let heading = document.querySelector("h2");

heading.innerHTML += " from Apna College students";

let boxes = document.querySelectorAll(".box");

// let texts = ["Hi", "This is", "Faiqa Batool"];

// boxes.forEach((div, index) => {
//   // Make sure we have enough texts for the number of divs
//   if (index < texts.length) {
//     div.textContent = texts[index];
//   }
// });
let idx = 1;
for (let box of boxes){
    box.innerText += `${idx}`;
    idx++;
}
