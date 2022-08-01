// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLength = getPasswordDigits();

  var includeLowercase = window.prompt("Should I include lowercase letters in your password?");
  var includeUppercase = window.prompt("Should I include uppercase letters in your password?");
  var includeNumbers = window.prompt("Should I include numbers in your password?");
  var includeSpecial = window.prompt("Should I include special characters in your password? ie ! $ # @");


  return "thisIsMyWackyPasswordYo123!@$%"+passwordLength;
}

function getPasswordDigits(){
  var length = window.prompt("How many characters do you want in your password?");
  var i = 1;
  while(isNaN(length)){
    i++;
    length = window.prompt("How many characters do you want in your password? Your answer must be in digits! I shouldn't have to ask you "+ i +" times!");
  }
  return length;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
