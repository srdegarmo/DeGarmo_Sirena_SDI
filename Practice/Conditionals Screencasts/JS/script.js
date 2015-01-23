
/*
 Sirena DeGarmo
 SDI Section #3
 Conditionals Screencast
 1/22/2015
 */
//alert("Testing to see if the JS file is attached to the html.");

//Conditional statement
//conditional operators: > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to), != (not equal to), == (equal to)
//if condition is deemed false, it will completely ignore what is in the {}
//if(condition){action}
//beach scenario: if it is hotter than 70, we will go to the beach
temp=82;
if(temp>70){goToTheBeach();}

//Nesting conditionals
//if it is sunny, I will go to the beach; if not, I will go to the movies
//if the water is warm, I'll wear my new swim suit
if(sunny) {
 goToTheBeach();
 if(warmWater){
  wearNewSuit();
 }
}else{
 goToTheMovies();
}
