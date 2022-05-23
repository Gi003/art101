//Author: Gio Iraheta

//Created 05.16.2022

//create loop

for (i=1; i<=200; i++) {
//for multiples 0f 3 5 7
   if (i%15 == 0) {
$("#output").append("<p>" + "FizzBuzz" + "</p>")}

   else if (i%21 == 0) {
$("#output").append("<p>" + "FizzBoom" + "</p>")}

   else if (i%35 == 0) {
$("#output").append("<p>" + "BuzzBoom" + "</p>")}

   else if (i%105 == 0) {
$("#output").append("<p>" + "FizzBuzzBoom" + "</p>")}
// for multiples of 3 5 7 (separate)
   else if (i%3 == 0) {
$("#output").append("<p>" + "Fizz" + "</p>")}

   else if (i%5 == 0) {
$("#output").append("<p>" + "Buzz" + "</p>")}

   else if (i%7 == 0) {
$("#output").append("<p>" + "Boom" + "</p>")}

//for other numbers
    else {
$("#output").append("<p>" + i + "</p>")
 }

}
