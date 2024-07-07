// Qs 1 : Create a new button element. Give it a text “click me”, 
// background color of red & text color of white.
// and Insert the button as the first element inside the body tag.

// create a new button
let newBtn = document.createElement("button");

// give it a text "click me"
newBtn.innerText = "Click Me";
newBtn.style.height = "40px";

// background color of red
newBtn.style.backgroundColor = "red";

// text color of white
newBtn.style.color = "white";

// Insert the button as the first element inside the body tag.
document.querySelector("body").prepend(newBtn);

// Qs 2: create a new class in CSS and try to append this class to the 
// <p> element.

let para = document.querySelector("p");
para.classList.add("newClass");

