/*
Sirena DeGarmo
SDI Section #3
GoTo Training Day #2
1/14/2015
 */
//alert("Testing to see if the JS file is attached to the html.");

//Create an age calculator

//Ask the user their name
var name=prompt("Please type in your name");

//console.log out the name
console.log(name);

//Welcome the user with an alert
alert("Welcome "+name+"! Let's figure out how old you are.");

//Ask user what year they are born
//age=current year  subtract the year they were born
//Create variable to catch the prompted answer
var yearBorn=prompt("What year were you born:");
console.log(yearBorn);

//What is the current year?
var currentYear=2015;

//Calculate the age & create a variable for results
var age=currentYear-yearBorn-1;

console.log(name+" you are "+age+" years old.");
alert(name+" you are "+age+" years old.");

//Make it MORE complicated

//Ask the user how many years in the future they would like to know their age.
var yearsMore=prompt("How many years in the future would you like to know your age?");
console.log(yearsMore);

//Calculate future age
//+plus sign does double duty: addition & concatenation
//prompts ONLY return text strings!!!!
var futureAge=age+yearsMore;
console.log(futureAge);

var a=Number("40");
console.log(a);

var b=Number("40 years old");
console.log(b);
