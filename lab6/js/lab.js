//Author: Gio Iraheta

//Created 04.25.2022

// declaring variables
myTransport = ["car", "train", "bus", "Uber",
 "the movement of my very own legs"];

 myMainRide = {
   make: "mammal",
   model: "Homo-Erectus",
   color: "brown",
   year: "2003",
   age: function() {
     return 2022 - year;
   }

 }

 // Output
 document.writeln("The kinds of transportation devices I use are:", myTransport, "<br>");
 document.writeln(myTransport[4],"is my main form of transportation though.");
 document.writeln("My main ride in more detail is : <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
