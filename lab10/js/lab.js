//Author: Gio Iraheta

//Created 05.10.2022

//find div and create button
document.getElementById("output").innerHTML =
"<button id='button' onclick='print()'> Press me pls </button>";


function myFunction() {
// declare variable username
  var userName = window.prompt("TELL ME YOUR NAME NOW.");
  console.log("userName =", userName);
//convert users string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
// sort array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
//convert back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
//use return
  return nameSorted;
// print out
}

function print() {
  document.getElementById("box").innerHTML = myFunction();
}
