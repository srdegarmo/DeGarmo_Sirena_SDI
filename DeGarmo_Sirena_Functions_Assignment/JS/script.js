
 /*
Sirena DeGarmo
SDI Section #3
Functions Assignment
1/14/2015
*/
//alert("Testing to see if the JS file is attached to the html.");

 //1 anonymous function - w/ argument and parameter
 //1 function needs 3 parameters
 //value returned for each function


 //SOlVE PYTHAGORAS EQUATION
 //a^2 + b^2 = c^2

 //TELL USER WHAT WE ARE DOING
  alert("We're solving a pythagoras equation when we are given the data for A & B.");

 //DEFINE GIVENS & CREATE FUNCTION
 //Collect givens
 //Ask user for A
 var a = prompt("What is the value of a:");
 //Ask user for B
 var b = prompt("What is the value of b:");

//invoke function & assign variable to hold the info the function returns
 var pythagoras = calcTotal(a, b);

 //use function with parameters to calculate answer & return results to function invocation
 function calcTotal(a, b){
     var results = a*a + b*b;
     return results;
 }
//print results to console
 console.log("The answer to the equation is " + pythagoras + " = " + "c^2");

 //validate user prompt for A using a loop
 while(a >= 15){
     a--;
     console.log(a);
 }

 //validate user prompt for B using a loop
 while(b > 0){
     b--;
     console.log(b);
 }

 //ADDITION WITH 3 VARIABLES
 //x + y + z = total

 //Ask user if they want to continue
 alert("Are you ready for some more math?");

 //Tell user what we are doing
 alert("We are going to calculate the sum of 3 numbers.\nClick OK to begin");

 //Define variables
 //ask user for first number
 var x = prompt("What is the first number?");
 //ask user for second number
 var y = prompt("What is the second number?");
 //ask user for third number
 var z = prompt("What is the third number?")