// Created by Gio

//Created in 04.27.2022

// create function
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
  return nameSorted
// use document.writeln
}

document.writeln("HERES YOUR NAME BACK GOODBYE ",
  myFunction(), "</br>");
