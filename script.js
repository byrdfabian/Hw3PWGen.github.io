// Assignment Code
var upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChars="abcdefghijklmnopqrstuv";
var numberChars="1234567890";
var symbolsChars="!@#$%^&*(){}<>?[]"
var allChars= upperChars + lowerChars + numberChars + symbolsChars;
var password = generatePassword ();
var passwordText = doment.querySelector("#password");
var generateBtn= document.querySelector ("#generate");



function writePasswod () { 
  return (upperChars) + (lowerChars) + (numberChars) + (symbolsChars); 
}
document . getElementById("password").innerHTML = password
generateBtn.addEventListener("click", writePassword); {

}
