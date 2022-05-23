//Author: Gio Iraheta

//Created 04.25.2022
function negative(x) {
  var result= x * -1
  return result
}

//test functions
console.log("What is the negative of 1?", negative(2) );
console.log(negative(3), "is the negative of 3");

//create array
var myArray = [1,2,3,4,5,6,7,8,9,0]
console.log("My array", myArray);

var result = myArray.map(negative);
//testing array
console.log("seeing the oposites in the array", result);

var result = myArray.map(function(x) {
  var multiply = x * 2
  return multiply;
})
//should return the double of everything
console.log("Array doubled is", result);
