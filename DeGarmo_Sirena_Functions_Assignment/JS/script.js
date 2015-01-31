
 /*
Sirena DeGarmo
SDI Section #3
Functions Assignment
1/14/2015
*/
//alert("Testing to see if the JS file is attached to the html.");

 //1 normal function - w/ argument and parameter
 //1 anonymous function - w/ argument and parameter
 //1 function needs 3 parameters
 //value returned for each function
 //no main code variable inside of function - must pass in as argument
 //all user prompts must be validated using a while loop

 //Calculate area of circle

 //Tell user what were are doing
 alert("We're calculating the area of a circle.");
 //Ask user for radius
 var radius = prompt("Please enter the radius of the circle:");
 //print radius results to console
 console.log(radius);
 //Ask user what unit we are calculating the area in
 var unit = prompt("Please enter the unit the circle is measured in:");
 //Print unit results to console
 console.log(unit);
 //create variable for value of pi
 var pi = 3.14;
 //create function to calculate area of the circle
 function areaOfCircle(r, p, u){
  var radius =
 }

 //print radius to console
 console.log(radius);

 //Ask user for unit the circle is calculated in
 var units = prompt("Please enter the unit the circle is measured in:");

 //print units to console
 console.log(units);

 //Create variable for pi
 var pi = 3.14;

 //Create variable to capture area of circle - Area=pi*radius^2
 var areaOfCircle = pi * Math.pow(radius, 2);

 //tell user the area of the circle using an alert
 alert("The area of the circle is " + areaOfCircle + units + "^2");

 //use a function to calculate what the area would be if the radius increased by 1 every time
 function circleArea(radius, pi, units){
  console.log("The area of the circle is " + areaOfCircle + units + "^2");
 }
