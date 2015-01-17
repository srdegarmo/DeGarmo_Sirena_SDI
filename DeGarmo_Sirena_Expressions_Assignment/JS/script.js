
 /*
Sirena DeGarmo
SDI Section #3
Expressions Assignment
1/16/2015
 */
//alert("Testing to see if the JS file is attached to the html.");

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
 console.log(name + " you need to save " + difference + " more dollars.");
 alert (name + " you need to save " + difference + " more dollars.");


