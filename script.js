// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passwordCharacter = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbols: getRandomSymbol,
}

function generatePassword(){
  return "This will be replaced by me generated password.";
}
// This is where I asked user how many characters?
var character = prompt("How many characters to generate your password?"); 


if (character){
  alert = prompt("Need a value");
}
  else if (enter < 8 || enter > 128) {
  character = prompt("Choose between 8 to 128 characters");
  }

var lower = confirm ("Click OK if you want to use lowercase characters?");
var upper = confirm ("Click OK if you want to use uppercase characters?");
var number = confirm ("Click OK if you want to use number characters?");
var symbol = confirm ("Click OK if you want to use symbol characters?");

// if (character){
//   alert = prompt("Need a value");
// }
//   else if (enter < 8 || enter > 128) {
//   character = prompt("Choose between 8 to 128 characters");
//   }


function getRandomLower() {
  lower = 'abcdefghijklmnopqrstuvwxyz'
  return lower[Math.floor(Math.random() * lower.length)];
}
for (var i = 0; i < lower.length; i++){
  console.log(lower[i]);
}

function getRandomUpper() {
  upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  return upper[Math.floor(Math.random() * upper.length)];
}

function getRandomNumber() {
  number = "0123456789"
  return number[Math.floor(Math.random() * number.length)];
}

function getRandomSymbol() {
  symbol = '~`!@#$%^&*()_+-={}|:"<>?,./;'; 
  return symbol[Math.floor(Math.random() * symbol.length)];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
