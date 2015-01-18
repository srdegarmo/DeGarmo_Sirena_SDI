
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
 //Create expression to calculate how much pizza each party-goer can eat if they all get an even amount of whole slices
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
 console.log(leftoverSlices);
 //Subtract leftover slices from total slices to determine how many whole slices are available to guests
 var availSlices = totalSlices - leftoverSlices;
 //Divide available slices by the number of people to find out how many whole slices each person can eat if everyone gets the same amount
 var slicesPerPerson = availSlices / people;
 //Show user how many pieces of pizza each person at the party ate using an alert
 alert("Each person ate " + slicesPerPerson + " slices of pizza at the party.");

//SLICE OF PIE, pt. 2
 //Sparky gets to eat the leftover pizza after all the whole slices are divided up between the guests
 //leftoverSlices = totalSlices % people gave us the remainder after pizza slices were divided up evenly amongst the guests
 //Display data for leftoverSlices in an alert
 var sparkySlices = alert("Because we are dividing the whole pizza slices evenly amongst the party-goers, there may be some leftovers for Sparky to eat!");
 var sparkySlices = alert("There were " + totalSlices + " slices of pizza and " + people + " people; so, each person got " + slicesPerPerson + " pieces of pizza. \nThat leaves " + leftoverSlices + " slices of pizza for Sparky to eat!");

 //AVERAGE SHOPPING BILL
 //Calculate average weekly grocery spending over the past 5 weeks
 //Create array storing past five grocery shopping totals
 var groceryCost = [100.00, 25.25, 55.75, 35.00, 140.65];
alert("Let's calculate how much I spend on groceries on average. \nMy last 5 grocery trips cost: $" + String(groceryCost[0]) + ", $" + String(groceryCost[1]) + ", $" + String(groceryCost[2]) + ", $" + String(groceryCost[3]) + ", and $" + String(groceryCost[4]) + ".");
 //To find average amount spent we must add all grocery shopping totals then divide by number of totals in array
 var totalSpent = groceryCost[0] + groceryCost[1] + groceryCost[2] + groceryCost[3] + groceryCost[4];
alert("Over the span of five weeks, I spent $" + totalSpent + " on groceries. \nTo figure out the average amount spent, I need to divide $" + totalSpent + " by the number of shopping trips made (five).");
//Divide totalSpent by shopping trips made to find average amount spent
 var avgSpent = totalSpent / 5;
 alert("I have spent a total of $" + totalSpent + " on groceries over 5 weeks. That is an average of $" + avgSpent + " per week." );

 //DISCOUNTS
 //Calculate discounted price of an item with and without tax
 //Ask user what item we are calculating the discounted price for
 var item = prompt("What item are we finding the discounted price of?");
 console.log(item);
 //Determine original price
 var origPrice = prompt("To determine the discounted price of an item, please provide the original selling price:");
 console.log(origPrice);
 //Determine discount percentage
 var discPercent = prompt("Now, please enter the discount percentage:");
 console.log(discPercent);
 //Determine sales tax
 var salesTax = prompt("Finally, please enter the sales tax percentage in your region:");
 console.log(salesTax);
 //Divide discPercent by 100 to convert to a decimal so we can determine discount amount
 var discPercentage = discPercent / 100;
 console.log(discPercentage);
 //To find amount of total cost saved based on discPercentage - multiply discPercentage by origPrice
 var savingsAmount = discPercentage * origPrice;
 console.log(savingsAmount);
 //To find cost of item after savings have been deducted - subtract savingsAmount from origPrice
 var withoutTax = origPrice - savingsAmount;
 //discCost represents the discount cost of the item before tax
 //Determine what discCost is with sales tax
 //Determine sales tax amount by dividing salesTax by 100 to convert to a decimal
 var taxPercent = salesTax / 100;
 //Determine how much sales tax is on the item by multiplying taxPercent by discCost
 var taxAmount = taxPercent * withoutTax;
 //taxedAmount represents the total taxes that will be added to the discCost
 //Determine what the cost of the discounted item will be with sales tax
 var withTax = taxAmount + withoutTax;
 //Create alert showing item, origCost, discPercent, discount cost without tax and with tax
 alert("Your " + item + " was originally $" + origPrice + ", but after a " + discPercent + "% discount, it is now $" + withoutTax + " without tax, and $" + withTax + " with tax.");
