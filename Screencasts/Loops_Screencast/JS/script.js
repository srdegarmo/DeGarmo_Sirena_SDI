
 /*
Sirena DeGarmo
SDI Section #3
Loops Screencast
1/28/2015

alert("Testing to see if the JS file is attached to the html.");
*/

 //Identify types of loops
 //Apply loops
 //Understand difference between types of loops

 /*Regular conditional
 var b = 10;
 if ( b > 0){
  console.log(b);
 }
 */

 //Make regular "if" statement a loop by substituting "if" with "while"
 var b = 10; //sets up index
 //says while b is greater than 0, run this code
 while (b>0){ //checks the condition
  console.log(b + " kegs on the wall.");
  //that creates an infinite loop - to break cycle we need to create something to track what number we are on
  //increment or decrement
  //decrement ex: b--;  //increment ex: b++;
  b--; //increments or decrements index (either counts up from variable or down from variable)
 }
//loop COUNTS DOWN from variable starting point! EX: 10 kegs on the wall, 9 kegs on the wall, etc.