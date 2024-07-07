let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector(".para");
console.log(para.setAttribute("class", "New-class"));

//change style of an element

div.style.backgroundColor = "hotpink";
div.style.fontSize = "26px";
// div.innerText = "Hi Beautiful!";
div.style.fontStyle = "italic";
// div.style.visibility = "hidden";

// insert elements
// 1. create element
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
newBtn.style.backgroundColor = "skyblue";
newBtn.style.height = "40px";
console.log(newBtn);

// 2. add the element
// access the element e.g. div here, we did it above
// to add inside of an element, at the end
// div.append(newBtn);

// to add inside of an element, at the start
// div.prepend(newBtn);

// to add before and element
// div.before(newBtn);

// to add after and element
// div.after(newBtn);

para.after(newBtn);

// add new heading
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>I'm a new heading!</i>";

document.querySelector("body").prepend(newHeading);

// to delete a node
// newHeading.remove();

para.remove();
