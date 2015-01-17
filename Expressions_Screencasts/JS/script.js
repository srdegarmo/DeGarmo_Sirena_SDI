
 /*
Sirena DeGarmo
SDI Section #3
Expressions Screencasts
1/16/2015
 */
alert("Testing to see if the JS file is attached to the html.");

 //BASIC EXPRESSIONS

 var a = 2; //sets up variable & defines it with 2
 a = a + 3; //takes value of a+3 and stores it in a
 console.log(a); //if we want to add to a and change a, we use an assignment operator

var a = 2; //sets up variable & defines it
var b;
b = a + 3; //store value of a+3 inside b
console.log(b); //will show you value of a+3
console.log(a); //will show you value of a

//EXAMPLE EXPRESSIONS - AGE

 var yearBorn = 1994; //define age first
 //2012 - yearBorn; defines expression, but doesn't have a variable to store the answer
 var age = 2015 - yearBorn; //create variable to store result
 console.log(age);

 //ARITHMETIC OPERATORS

 //area of triangle = half of the width * height
 // var area; is the variable for result
 var width = 4; //given
 var height = 5; //given
 var area = 0.5 * width * height;
 console.log(area);

 //MODULO OPERATOR - gets remainder of division

 var remainder = 32%10 //tells us what's left over when we divide 32 by 10
 console.log(remainder);

 //ORDER OF OPERATIONS

 var quiz1 = 87;
 var quiz2 = 100;
 var quiz3 = 60;
 var quiz4 = 80;

 //the average is the sum of all numbers divided by the number of items
 //create result variable
 var average = (quiz1 + quiz2 + quiz3 +quiz4)/4;
//console.log(average);

 //perimeter is twice the length times twice the width
 var length = 7;
 var width = 6;
 var perimeter = length * 2 + width *2;
 console.log(perimeter);

//USING ARRAYS IN EXPRESSIONS
 //expressions + arrays + array access notation
 //adding items in an array

var orangeBins = [234, 567, 883];
//array index numbers [0, 1, 2, etc}
 var total = (orangeBins[0] + orangeBins[1] + orangeBins[2]);
 console.log(total);


