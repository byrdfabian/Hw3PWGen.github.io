//Created a function that would run through the string to return random password
function generate(){
//Created a variable with characters to selected from
var charset="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
//Variable to designate the desired length of the password
var passwordLength=16;
//Variable for the sting that will be returned
var password="";
//For loop to run through the string of 16 characters before ending
for (var i=0;i<passwordLength;i++){
//Created a variable to run through the string of number before returning a random numbers
  var randomnum=Math.floor(Math.random()*charset.length);
//Used the variable password to return the generated password consisting of radom numbers and other characters adding 1 each time it is run
  password+=charset.substring(randomnum,randomnum+1);
}
//Instuctions to find element with an ID of "input" and place the generated value/password into the allocated space
document.getElementById("input").value=password;
}