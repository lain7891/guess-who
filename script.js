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


// Used ASCII Table to avoid writing all the letters

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

if (getRandomLower)

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  symbols = '~`!@#$%^&*()_+-={}|:"<>?,./;'; 
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomNumber());
console.log(getRandomSymbol());
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
