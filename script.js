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
  // setting number they pick
character = prompt("Choose between 8 to 128 characters");
console.log(character)
// convert number from string to an integer
character = parseInt(character)
var lower = confirm ("Click OK if you want to use lowercase characters?");
var upper = confirm ("Click OK if you want to use uppercase characters?");
var number = confirm ("Click OK if you want to use number characters?");
var symbol = confirm ("Click OK if you want to use symbol characters?");
  // Options are going to be stored
  var characterOptions = ""
  // This is my string that will hold the users new password
  var userPassword = ""
  // Checking the number of characters they want is between the numbers below
  if (character >= 8 && character <= 128) {
    // Random lowercase letters to choose from
    if (lower === true) {
      for (var i = 0; i < character; i++){
        characterOptions = characterOptions + getRandomLower();
      }
    }
    if (upper === true) {
      for (var i = 0; i < character; i++){
        characterOptions = characterOptions + getRandomUpper();
      }
    }
    if (number === true) {
      for (var i = 0; i < character; i++){
        characterOptions = characterOptions + getRandomNumber();
      }
    }
    if (symbol === true) {
      for (var i = 0; i < character; i++){
        characterOptions = characterOptions + getRandomSymbol();
      }
    }
  }
  // if the above is not met then nothing can be created
  else {
    alert ("Sorry can't create");
  }
  for (var i = 0; i < character; i++){
  userPassword = userPassword + characterOptions[Math.floor(Math.random() * characterOptions.length)];
  }
  // return characterOptions[Math.floor(Math.random() * characterOptions.length)];
  console.log(characterOptions);
  console.log(userPassword);
  return userPassword; 
}
// used generate the random characters 
function getRandomLower() {
  lower = 'abcdefghijklmnopqrstuvwxyz'
  return lower[Math.floor(Math.random() * lower.length)];
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
