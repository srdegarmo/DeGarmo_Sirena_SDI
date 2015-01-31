
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



 //CALCULATE AREA OF A CIRCLE
 //Area = PI*RADIUS^2

 //TELL USER WHAT WE ARE DOING
  alert("We're calculating the area of a circle.");

 //DEFINE GIVENS & CREATE FUNCTION
 //Collect givens
 //Ask user how they will define Pi
 var pi = prompt("What will you use to represent Pi:");
 //Ask user what unit we are using
 var unit = prompt("What unit are we calculating the area of a circle in:");
 //Ask user the radius
 var radius = prompt("What is the radius of the circle:");

//invoke function & assign variable to hold the info the function returns
 var total = calcArea(pi, radius);

 //use function with parameters to calculate area of circle
 function calcArea(pi, radius){
     var area = pi * radius * radius;
     return area;
 }

 console.log("The area of the circle is " + total + unit + "^2.");