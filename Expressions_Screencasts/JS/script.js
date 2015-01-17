
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

 //practicing arrays in expressions
 //determining how many pencils a class of children has all together
 var pencils = [15, 7, 2, 0, 12, 9, 22];
 var totalPencils = (pencils[0] + pencils[1] + pencils[2] + pencils[3] + pencils[4] + pencils[5] + pencils[6]);
 console.log(totalPencils);
 //average amount of pencils
 var avgPencils = (totalPencils/7);
 console.log(avgPencils);

//CONCATENATING

 var firstName = ("Sirena");
 var lastName = ("DeGarmo");
 var fullName = (firstName + " " + lastName);
 console.log(fullName);

 //strings are inside double quotes - concatenation sees these as characters (not numbers) & will combine things in strings EX: "6" + "7" = 67
 //numbers are not in quotes - concatenation will see these as numbers & will use arithmetic to find sum EX: 6 + 7 = 13

 var a = "6";
 var b = "7";
 var result = a + b;
 console.log(result);

//CASTING
 //make computer treat number as a string or a string like a number

 //holding character 6, not number 6
 var stringVar = "6";
 var result = 7 + stringVar;
 console.log(result);

 //Telling computer to treat character as number aka casting
 //put parenthesis around thing we're casting
 //type thing we're casting to in front of parenthesis
 var stringVar = "6";
 var result = 7 + Number(stringVar);
 console.log(result);

//phone number
 //casting as strings
 var areaCode = 407;
 var firstPart = 203;
 var secPart = 4529;

 var phoneNum = String(areaCode) + String(firstPart) + String(secPart);
 console.log(phoneNum)

 //practicing casting

 //(918) 805-2679
 var areaCode = 918;
 var firstPart = 805;
 var secPart = 2679;
 var phoneNum = "(" + String(areaCode) + ") " + String(firstPart) + "-" + String(secPart);
 console.log(phoneNum);

