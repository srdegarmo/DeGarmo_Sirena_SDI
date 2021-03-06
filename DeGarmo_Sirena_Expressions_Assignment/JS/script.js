
 /*
Sirena DeGarmo
SDI Section #3
Expressions Assignment
1/16/2015
 */

//Creating calculator to determine how long it will take user to save enough money to buy a particular item

//Ask user their name
 var name = prompt("Please enter your name:");
//console.log out name
console.log(name);

//Welcome user with an alert
 alert("Hello, " + name + "! Let's figure out how long it will take you to save enough money to purchase a certain item");

//Ask the user what they are saving for
//Create variable to catch prompted answer
 var item = prompt("What item are you saving up to purchase?");
 console.log(item);

//Ask user how much money they already have saved
//Create variable to catch prompted answer
 var saved = prompt("How much money do you currently have saved?");
 console.log(saved);

//Ask user how much item in question costs
//Create variable to catch prompted answer
 var itemCost = prompt("How much does " + item + "cost?");
 console.log(itemCost);

//Create alert outlining data collected so far
 alert("Okay, " + name + ". So far we have determined that " + item + " costs " + itemCost + ", and you have " + saved + " saved up so far. Now lets determine how much more you need to save.");

//Calculate the difference between itemCost and saved
 var difference = itemCost - saved;
 console.log(name + " you need to save " + difference + " more dollars in order to purchase " + item + ".");

//Display difference to user
 alert (name + " you need to save " + difference + " more dollars in order to purchase " + item + ".");

//Determine how many weeks it will take the user to save enough money
 alert ("Now, let's figure out how long it will take you to save " + difference + "...");

//Ask user how much money they can put in savings per week
 var availableToSave = prompt("How much money are you able to put in savings each week?");
 console.log(availableToSave);

 //Update user of data collected
 alert (name + ", you have " + availableToSave + " each week. You need to save a total of " + difference " more." \n "Are you ready to see how long that will take you?");

 //Calculate how many weeks it will take to save enough money
 var moneyNeeded = difference/availableToSave;

//Display results
 alert (name + ", you need to save " + moneyNeeded " in order to purchase " + item);
