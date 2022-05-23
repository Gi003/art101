//Author: Gio Iraheta

//Created 05.06.2022

//Find the output div and assign variable
var outputEl =
  document.getElementById("output");

//Create new element and assign variable
var new1El = document.createElement("p");
//modifying dom element
new1El.id = "new1"
new1El.innerHTML =
  "This was written in Javascript";
//append
outputEl.appendChild(new1El);



//create second element and assign variable
var new2El = document.createElement("h2");
//Modifying dom element
new2El.innerHTML = "So was this!";
//Append
outputEl.appendChild(new2El);


//change style of two elements
var color1 = document.getElementsByClassName("descriptive-text");
color1.style.color = "red";
