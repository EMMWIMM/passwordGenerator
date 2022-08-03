// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var special = ["!", "@","#", "$", "%", "&", "*", "=", "+", "-", "_", "?", "/"]
var numbers = ["0", "1", "2","3", "4", "5", "6", "7", "8", "9"]


// var randofunc = {
//   lowerC = getRandoLower;
//   upperC = getRandoUpper;
//   numbersC = getRandoNumber;
//   specialC = getRandoSpecial;
// }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// yes/no lowercase,uppercase, specials
function generatePassword(){
  var passwordLength = getPasswordDigits();

  var includeLowercase = getYesOrNo("Should I include lowercase letters in your password? Please indicate yes or no.");
  console.log(includeLowercase + " to lowercase");
  var includeUppercase = getYesOrNo("Should I include uppercase letters in your password? Please indicate yes or no." );
  console.log(includeUppercase + " to uppercase");
  var includeNumbers = getYesOrNo("Should I include numbers in your password? Please indicate yes or no.");
  console.log(includeNumbers + " to numbers");
  var includeSpecial = getYesOrNo("Should I include special characters in your password? ie ! $ # @ , Please indicate yes or no.");
  console.log(includeSpecial + " to special characters");

  

  return "thisIsMyWackyPasswordYo123!@$%"+passwordLength;
}

// get password length
function getPasswordDigits(){
  var length = window.prompt("How many characters do you want in your password?");
  var i = 1;
  while(isNaN(length) || length< 8 || length> 128){
    i++;
    length = window.prompt("How many characters do you want in your password? Your answer must be in digits and have no less than 8 and no more that 128 characters! I shouldn't have to ask you "+ i +" times!");
  }
  return length;
}

function getYesOrNo (question){
  let wrongAnswer = "WARNING: your answer must be yes or no. \n";
  let answer = false;
  let passing = false;
  while (!passing){
    tempAnswer = window.prompt ( question);

    if ( tempAnswer == "yes"){
      answer = true;
      passing = true;
    }
    else if( tempAnswer == "no") {
      answer = false;
      passing = true;
    }
    else {
      if (!question.startsWith("WARNING")){
        question = wrongAnswer+ question;
      }
    }
  }

  return answer;
}
// get array based on yes/no statements

//randofunc

function getRandoLower (){
  return lower [math.floor(math.random()*lower.length)]
  console.log(getRandoLower);
}

function getRandoUpper (){
  return upper [math.floor(math.random()*upper.length)]
  console.log(getRandoUpper);
}

function getRandoNumber (){
  return numbers [math.floor(math.random()*numbers.length)]
  console.log(getRandoNumber);
}

function getRandoSpecial (){
  return special [math.floor(math.random()*special.length)]
  console.log(getRandoSpecial);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
