
 /*
Sirena DeGarmo
SDI Section #3
Expressions Worksheet
1/14/2015
 */
//alert("Testing to see if the JS file is attached to the html.");

//DOG YEARS
 //Dogs age 7 times faster than humans ( 1 human year = 7 dog years)
 //Calculate Sparky the pit bulls age in dog years based on his actual age
 //Ask user to provide Sparky's age in human years
 var humanYears = prompt("Let's find out how old Sparky is in dog years. \nFirst, please enter his age in human years:");
 //To calculate how old Sparky is in human years we have to multiply humanYears by 7
 var yearDiff = humanYears * 7;
 //Create variable to catch answer
 var dogYears = yearDiff;
 //Print product of humanYears and dogYears to console
 console.log(dogYears);
 //Notify user of Sparky's age in human and dog years using an alert
 alert("Sparky is " + humanYears + " human years old; which is " + dogYears + " in dog years.");

//SLICE OF PIE, pt. 1
 //Create expression to calculate how much pizza each party-goer can eat
  //all pizzas have the same number of identically sized slices
 //Tell user what we are calculating
 var slices = alert("Let's determine how much pizza each person that comes to the party can eat.");
 //Ask user how many people are coming to the party
 var people = prompt("How many people are attending the party?");
 //Ask user how many slices of pizza are in each pie
 var slices = prompt("How many slices are in each pizza?");
 //Ask user how many pizzas were ordered
 var pizza = prompt("How many pizzas were ordered?");
 //Print results to console
 console.log(slices);
 console.log(people);
 console.log(pizza);
 //Multiply slices by pizza to determine how many slices there are total
 var totalSlices = slices * pizza;
 //print total number of slices to console
 console.log(totalSlices);
//Determine how many slices will be leftover if each guests gets whole slices using the modulo operator
 var leftoverSlices = totalSlices % people;
 //Subtract leftover slices from total slices to determine how many whole slices are available to guests
 var availSlices = totalSlices - leftoverSlices;
 //Divide available slices by the number of people to find out how many whole slices each person can eat if everyone gets the same amount
 var slicesPerPerson = availSlices / people;
 //Show user how many pieces of pizza each person at the party ate using an alert
 alert("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

//SLICE OF PIE, pt. 2
 //Sparky gets to eat the leftover pizza after all the whole slices are divided up between the guests
 //Determine how many slices of pizza will be leftover for Sparky using modulo operator

 var sparkySlices = alert("Let's determine how many pieces of pizza will be leftover for Sparky after each party guest gets " + slicesPerPerson + " pieces of pizza.");