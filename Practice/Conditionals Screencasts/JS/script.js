
/*
 Sirena DeGarmo
 SDI Section #3
 Conditionals Screencast
 1/22/2015
 */
//alert("Testing to see if the JS file is attached to the html.");

//identify variables
var kidHeight = 46;
var minHeight = 48;
var wParentHeight = 45;

//if child is tall enough, print "you can ride" to console
if(kidHeight >= minHeight){
 //code to perform if variable is true
 console.log("You can ride the coaster!")
}else if(kidHeight > wParentHeight){
 console.log("You can ride with a parent present.")
}else{
 console.log("Sorry kid, you've got some growing to do.")
}


//Relational Operators
//> (greater than), < (less than), <= (less than or equal to), >= (greater than or equal to)

//Equality Operators
//== (equality), === strict equality, != (not equal to)

//Equality - a==b - a is the same as b

//Strict equality - compare value & type
6 === "6"; //false
6 === 6; //true

//Logical operators - combine pairs of relational expressions
 //only between boolean variables or between comparisons
//&& (and), || (or), ^ (exclusive or), ! (not)
//&& - both pair must be true
//|| - one of the two must be true
 //TRUE: true || true, true || false, false || true
//^ - only one can be true
//! - flips meaning of object - true becomes false, false becomes true

var budget= 300;
var iPhonePrice = 699.99;
var wonLottery = true;

//if price of phone is less than budget AND if paycheck is over 300
if(iPhonePrice < budget || wonLottery) {
 console.log("We can buy the phone!");
}else{
 console.log("No phone for you!");
}


