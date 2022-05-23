//Author: Gio Iraheta

//Created 05.16.2022

// declaring variables

//create function that returns house
//depending on mod 4
function sortingHat(str) {
  length = str.length;
  mod = length % 4;
  if (mod == 0) {
    return "Ravenclaw"
  }
  else if (mod == 1) {
    return "Gryffindor"
  }
  else if (mod  == 2) {
    return "Slytherin"
  }
  else {
    return "Hufflepuff"
  }
}

//creating button
$("#button").click( function() {
  var name = $("#input").val();
  var house = sortingHat(name);
  newText = "<p> The sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
