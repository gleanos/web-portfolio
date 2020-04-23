let myLabel = document.getElementById("my-text");
let myButton = document.getElementById("my-button");
let myTitle = document.getElementById("title");
let box = document.getElementById("box");
let submissions = [];

box.style.width = "100px";
box.style.height = "100px";
box.style.border = "2px solid blue";

myButton.addEventListener("click", function() {
  let inputString = myLabel.value;
  //myTitle.innerHTML = inputString;
  submissions.push(inputString);

  //innerHTML can be used for any HTML element!
  myTitle.innerHTML = inputString;
  myTitle.style.color = "black";
  box.innerHTML = inputString;
});
