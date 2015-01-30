
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
