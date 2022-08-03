// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var special = ["!", "@","#", "$", "%", "&", "*", "=", "+", "-", "_", "?", "/"]



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

  var randoPass= "";
  var sets = [includeLowercase, includeUppercase, includeNumbers, includeSpecial];
  var numTrues = countTrues(sets);
  var remainder = (passwordLength % numTrues);
  if (includeLowercase) {
    var numberOfLowers=Math.floor(passwordLength/numTrues);
    randoPass += getRandoSomething(numberOfLowers, lower);
    if(remainder > 0){
      randoPass += getRandosomething(numberOfLowers, lower);
      remainder = 0;
    }
  }

  if (includeUppercase) {
    randoPass += getRandoSomething(Math.floor(passwordLength/numTrues), upper);
    if(remainder > 0){
      randoPass += getRandoSomething(remainder, upper);
      remainder = 0;
    }
  }

  if (includeNumbers) {
    randoPass += getRandoNumber(Math.floor(passwordLength/numTrues));
    if(remainder > 0){
      randoPass += getRandoNumber(remainder);
      remainder = 0;
    }
  }

  if (includeSpecial) {
    randoPass += getRandoSomething(Math.floor(passwordLength/numTrues), special);
    if(remainder > 0){
      randoPass += getRandoSomething(remainder, special);
      remainder = 0;
    }
  }

  if(numTrues == 0){
    window.alert("You cannot have a password without some kind of characters!");
    return "Could not generate Password without any character types selected :(";
  }

  return randoPass;
}
// count trues

function countTrues(includes){
  var trues= 0;
  for( i=0; i<includes.length; i++){
      if (includes[i] == true){
        trues= trues + 1;
      }
  }
  return trues;
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
function getRandoSomething(numberOfChars, oneSet){
  let returnVal = "";
  for(i=0; i<numberOfChars; i++){
    returnVal += oneSet [Math.floor(Math.random()*oneSet.length)]
  }
  return returnVal;
}


function getRandoNumber (numberOfChars){
  let returnVal = "";
  for(i=0; i<numberOfChars; i++){
    returnVal += Math.floor(Math.random()*10)
  }
  console.log("getRandoNumber("+numberOfChars+") returns  "+returnVal);
  return returnVal;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
