// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  return "This will be replaced by me generated password.";
}

var userInput = prompt("How many characters to generate your password? You can choose between 8 to 128"); 

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

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
