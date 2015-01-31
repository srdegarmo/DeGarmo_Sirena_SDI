
 /*
Sirena DeGarmo
SDI Section #3
Functions Screencast
1/28/2015
 */

//alert("Testing to see if the JS file is attached to the html.");

 /*
 function functionName(parameters){
  code function runs
  }

  functions have to be called/invoked
  functionName();

  Variable Scope
  when calling a function it's going to use the variable inside of it's function - variables are mostly contained within their functions

  Make something in a function slightly different when we use it
  funcName(argument1, argument2);
  function funcName(parameter1, parameter2){
   code the function runs
  }

  Arguments are things going into the function
  Returning is things coming out of the function

  Anonymous functions
  var functionName = function(){
  //code to run
  }
  functionName()
  */

 function yourName(){
  console.log("Sirena.");
 }
 yourName();

 var number1 = 15;

 function addNumbers(){
  var number1 = 10;
  var number2 = 20;
  var number3 = 30;
  var number4 = 40;
  var sum = number1 + number2 + number3 + number4;
  console.log(sum);
 }
 addNumbers();

 var total = calcArea(30, 20); //whatever function returns, store it in this variable
 function calcArea(w, h){
  var area = w * h;
  return area;
 }
 console.log(total);

 function dogYears(age){
  var dogYears = age * 7;
  console.log("Sparky is " + dogYears + " years old.");
 }
 dogYears(4);
 dogYears(10);

 //Anonymous function - HAVE to be declared before they're called

 var calcArea = function(width, height) {
  var area = width * height;
  return area;
 }
var a = calcArea(20, 30);
 console.log(a);
