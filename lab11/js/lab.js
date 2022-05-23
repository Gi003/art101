//Author: Gio Iraheta

//Created 05.11.2022

//find Challenge header and replace with button
$("#challenge").html("<button id='1'>Challenge</button>")
//find Problems header and replace with button
$("#problems").html("<button id='2'>Problems</button>")
//find Results header and replace with button
$("#results").html("<button id='3'>Results</button>")

//create function for challenge section
$("#1").click(function() {
  $("#c-content").css("color", "red");
});

$("#2").click(function() {
  $("#p-content").css("color", "green");
});

$("#3").click(function() {
  $("#r-content").css("color", "blue");
});
