
 /*
Sirena DeGarmo
SDI Section #3
Functions Assignment
1/14/2015
*/
//alert("Testing to see if the JS file is attached to the html.");


 //SOlVE PYTHAGORAS EQUATION
 //a^2 + b^2 = c^2

 //TELL USER WHAT WE ARE DOING
 //create alert to notify user
  alert("We're solving a pythagoras equation when we are given the data for A & B.");

 //DEFINE GIVENS
 //Ask user for A
 var a = prompt("What is the value of a:");
 //Ask user for B
 var b = prompt("What is the value of b:");

//CALL FUNCTION
//assign function to variable so we can store the data returned from the function
 var pythagoras = calcTotal(a, b); //declare arguments

 //use function with parameters to calculate answer
 function calcTotal(a, b){ //define parameters
     var results = a*a + b*b;
     return results; //return results to function invocation
 }
//print results to console
 console.log("The answer to the equation is " + pythagoras + " = " + "c^2");

 //TEST USER INPUT WITH LOOPS
 //validate user prompt for A using a while loop
 while(a>0){ //if a is greater than 0, print this to console
     console.log(a);
     a--; //decrement a
 }

 //validate user prompt for B using a while loop
 while(b>0){ //if b is greater than 0, print this to console
     console.log(b);
     b--; //decrement b
 }


 //MULTIPLICATION WITH 3 VARIABLES
 //x * y * z = total

 //Ask user if they want to continue w/ alert
 alert("Are you ready for some more math?");

 //TELL USER WHAT WE'RE DOING w/ alert
 alert("We are going to calculate the product of 3 numbers.\nClick OK to begin");

 //DEFINE VARIABLES to store user input
 //ask user for first number
 var x = prompt("What is the first number?");
 //ask user for second number
 var y = prompt("What is the second number?");
 //ask user for third number
 var z = prompt("What is the third number?");

 //create anonymous function to hold data
 var multiply = function(x, y, z){
     var total = x * y * z;
     return(total);
 }

 //invoke function & reference arguments collected form user
 //assign variable to hold product of numbers calculated through the function
 var product = multiply(x, y, z);

 //print PRODUCT to console
 console.log("The product of the three numbers is " + product + "!");

 //TEST USER INPUT WITH LOOPS
 //validate user input for 1st number with while loop
 while(x>0){ //if x is greater than 0, print this to console
     console.log(x);
     x--; //decrement loop
 }

 //validate user input for 2nd number with while loop
 while(y>0){ //if y is greater than 0, print this to console
     console.log(y);
     y--; //decrement loop
 }

 //validate user input for 3rd number with while loop
 while(z<0){ //if z is greater than 0, print this to console
     console.log(z);
     z++; //increment loop
 }