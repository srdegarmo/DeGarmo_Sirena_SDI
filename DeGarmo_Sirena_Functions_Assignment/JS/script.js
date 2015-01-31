
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
 //Ask user for C
 var c = prompt("What is the value of c:");

//invoke function & assign variable to hold the info the function returns
 var pythagoras = calcTotal(a, b, c);

 //use function with parameters to calculate answer & return results to function invocation
 function calcTotal(a, b, c){
     var results = a*a + b*b;
     return results;
 }
//print results to console
 console.log("The answer to the equation is " + pythagoras + " = " + "c^2");
 
