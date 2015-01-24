
 /*
Sirena DeGarmo
SDI Section #3
Conditionals worksheet
1/22/2015
 */
//alert("Testing to see if the JS file is attached to the html.");


 //Group 1: Expressions with Conditionals
 //convert temp to either C or F
  //if user puts "C" for unit, the calculator will convert to Celsius
  //if user puts "F" for unit, the calculator will convert to Fahrenheit

 //Convert C to F - F=(C*2)+30

/*
 var C = 100;
 var convertC = C*2+32;
 var F = 32;
 var convertF = F-32*5/9;
 var unit = F;

if(unit == C){
 console.log("The temperature is " + C + " degrees in Celsius.");
 console.log("The temperature is " + convertC + " degrees in Fahrenheit.");
}else if(unit == F){
 console.log("The temperature is " + F + " degrees in Fahrenheit.");
 console.log("The temperature is " + convertF + " degrees in Celsius.");
}
*/

 var milesToGasStation = 200;
 var carMPG = 50;
 var percentGasTankFull = 25;
 var maxGalCapacity = 25;

 var galInTank = (percentGasTankFull/100) * maxGalCapacity;
 var milesAbleToDrive = (galInTank * carMPG);

 if(milesAbleToDrive > milesToGasStation){
  console.log("Yes, you can make it without stopping for gas!");
 }else{
  console.log("You only have " + galInTank + " gallons of gas in your tank, you better get gas now while you can!");
 }
