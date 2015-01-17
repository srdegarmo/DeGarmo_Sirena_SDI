
 /*
Sirena DeGarmo
SDI Section #3
Prompt & Alert Screencasts
1/16/2015
 */
//alert("Testing to see if the JS file is attached to the html.");

//PROMPTS - getting info from user ex: prompt();
 //creates pop up box for user to enter info into
 //to catch info you have to assign it to a variable to save user input
 var userInput = prompt("Enter your year of birth:");
 console.log(userInput); //we can see that, but user can't

 //use prompt and expression together
 // collect width and height to calculate area of a rectangle
 var width = prompt("We are calculating the area of a rectangle. \nPlease enter the width:");
 var height = prompt("Please enter the height.");
 var area = width * height;
 console.log(area);

//ALERTS - gives info to user ex: alert();
 alert("You gave " + width + " feet as the width of the rectangle, and " + height + " feet as the length of the rectangle. \nThe area of your rectangle is " + area + " square feet.");
