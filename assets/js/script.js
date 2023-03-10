//declare global variables
var passwordLength;
var passwordCriteria;
var validYesnoResponse;
var lowerCaseNeeded;
var upperCaseNeeded;
var numericNeeded;
var specialCharacterNeeded;
var validPasswordcriteria;
var nCriteria;
var passLowercase = "";
var passUppercase = "";
var passSpclChar = "";
var passNumber = "";
var stop;
var passWord;
var lowerCasecharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasecharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ['!', '\"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var numericCharcters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


//This function will start the process to get the user's inputs e.g.
function getUserinputs () {

  stop = false;
  nCriteria = 0;
  var validLength = false;
  
  //prompt user to select password length 8-128
  passwordLength = prompt("How many characters do you want for your password?");
  
  //handle user cancelling from the prompt
  if (!passwordLength) {
    return;
  }
  
  //validate that user has entered a number and a valid length
  if (isNaN(passwordLength)) {
        alert ("Password length must be a number.");
    } else if (passwordLength % 1 > 0) {
        alert ("Password length must be whole number only.");
    } else if (passwordLength < 8 || passwordLength > 128) {
        alert ("Password length must be between 8 and 128 characters."); 
    } else {
        validLength = true;
  }
  
  //call the function that asks if customer wants lower case in the password
  lowerCase()
  
  //loop until customer selects a valid response or cancels
  if (validYesnoResponse === false) {
    do {
      alert("You have entered an invalid response. Try again.");
      lowerCase()
      if (stop === true) {
        validYesnoResponse = true;
      }
    } while (validYesnoResponse === false);
  }
  
  if (stop === true) {
    return;
  }
  
  //call the function that asks if customer wants upper case in the password
  upperCase()
  
  //loop until customer selects a valid response or cancels
  if (validYesnoResponse === false) {
    do {
      alert("You have entered an invalid response. Try again.");
      lowerCase()
      if (stop === true) {
        validYesnoResponse = true;
      }
    } while (validYesnoResponse === false);
  }
  
  if (stop === true) {
    return;
  }
  
  //call the function that asks if customer wants number in the password
  numeric()
  
  //loop until customer selects a valid response or cancels
  if (validYesnoResponse === false) {
    do {
      alert("You have entered an invalid response. Try again.");
      lowerCase()
      if (stop === true) {
        validYesnoResponse = true;
      }
    } while (validYesnoResponse === false);
  }
  if (stop === true) {
    return;
  }
  
  //call the function that asks if customer wants special character in the password
  specialCharacter()
  
  //loop until customer selects a valid response or cancels
  if (validYesnoResponse === false) {
    do {
      alert("You have entered an invalid response. Try again.");
      lowerCase()
      if (stop === true) {
        validYesnoResponse = true;
      }
    } while (validYesnoResponse === false);
  }
  
  if (stop === true) {
    return;
  }
  
  }//end getUserinputs function


// this function evaluates if the user entered valid response to the password criteria question
function validateYesorNo(yesOrnoAnswer) {
  var yesOrnoAnswer
  if (yesOrnoAnswer === "Y" || yesOrnoAnswer === "N") {
    validYesnoResponse = true;
  } else {
    validYesnoResponse = false;
  }
} //end validate yes or no function


//ask for password criteria for lower case
function lowerCase() {
  lowerCaseNeeded = prompt("Do you want lower case character(s) in your password? (y/n)");
  if (!lowerCaseNeeded) {
    stop = true
    return;
  }
  lowerCaseNeeded = lowerCaseNeeded.toUpperCase();
  validateYesorNo(lowerCaseNeeded);
  if (lowerCaseNeeded === 'Y') {
    nCriteria = nCriteria  + 1;
    console.log("criteria is", nCriteria);
  }
} //end lower case question


//ask for password criteria for upper case
function upperCase() {
  upperCaseNeeded = prompt("Do you want upper case character(s) in your password? (y/n)");
  if (!upperCaseNeeded) {
    stop = true;
    return;
  }
  upperCaseNeeded = upperCaseNeeded.toUpperCase();
  validateYesorNo(upperCaseNeeded);
  if (upperCaseNeeded === 'Y') {
    nCriteria = nCriteria  + 1;
    console.log("criteria is", nCriteria);
  }
} //end upper case question


//ask for password criteria for numeric
function numeric() {
  numericNeeded = prompt("Do you want numeric character(s) in your password? (y/n)");
  if (!numericNeeded) {
    stop = true;
    return;
  }
  numericNeeded = numericNeeded.toUpperCase();
  validateYesorNo(numericNeeded);
  if (numericNeeded === 'Y') {
    nCriteria = nCriteria  + 1;
    console.log("criteria is", nCriteria);
  }
} //end numeric question


//ask for password criteria for special character
function specialCharacter() {
  specialCharacterNeeded = prompt("Do you want special character(s) in your password? (y/n)");
  if (!specialCharacterNeeded) {
    stop = true
    return;
  }
  specialCharacterNeeded = specialCharacterNeeded.toUpperCase();
  validateYesorNo(specialCharacterNeeded);
  if (specialCharacterNeeded === 'Y') {
    nCriteria = nCriteria  + 1;
    console.log("criteria is", nCriteria);
  }
} //end special character question


//This function validates that at least 1 criteria is selected. customer will be prompted to start again
function validatePasswordcriteria() {
  console.log(lowerCaseNeeded, upperCaseNeeded, numericNeeded, specialCharacterNeeded)
  if (lowerCaseNeeded === "N" && upperCaseNeeded === "N" && numericNeeded === "N" && specialCharacterNeeded === "N") {
    validPasswordcriteria = false; 
  } else {
    validPasswordcriteria = true;
  }
  console.log(validPasswordcriteria)
}//end validate password criteria


//This function will generate the actual password
function generateThepassword() {
  passWord = ""
  passLowercase = ""
  passUppercase = ""
  passSpclChar = ""
  passNumber = ""
  nIteratecriteria = Math.trunc(passwordLength / nCriteria)
  console.log("iteration", nIteratecriteria)

  if (lowerCaseNeeded === "Y") {
    for (var i = 0; i < nIteratecriteria; i++) {
      var passWordallCriteria = lowerCasecharacters[Math.floor(Math.random() * lowerCasecharacters.length)];
        console.log("This is the current value of i: " + i + ".");
        console.log(passWordallCriteria);
        passLowercase = passLowercase + passWordallCriteria
        console.log(passLowercase);
    }
  }
  if (upperCaseNeeded === "Y") {
    for (var i = 0; i < nIteratecriteria; i++) {
      var passWordallCriteria = upperCasecharacters[Math.floor(Math.random() * upperCasecharacters.length)];
        console.log("This is the current value of i: " + i + ".");
        console.log(passWordallCriteria);
        passUppercase = passUppercase + passWordallCriteria
        console.log(passUppercase);
    }
  }
  if (specialCharacterNeeded === "Y") {
    for (var i = 0; i < nIteratecriteria; i++) {
      var passWordallCriteria = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        console.log("This is the current value of i: " + i + ".");
        console.log(passWordallCriteria);
        passSpclChar = passSpclChar + passWordallCriteria
        console.log(passSpclChar);
    }
  }
  if (numericNeeded === "Y") {
    for (var i = 0; i < nIteratecriteria; i++) {
      var passWordallCriteria = numericCharcters[Math.floor(Math.random() * numericCharcters.length)];
        console.log("This is the current value of i: " + i + ".");
        console.log(passWordallCriteria);
        passNumber = passNumber + passWordallCriteria
        console.log(passNumber);
    }
  }

var nAdditionalchar = passwordLength % nCriteria
console.log("nAdditionalchar", nAdditionalchar);

  if (nAdditionalchar != 0 && lowerCaseNeeded === "Y") {
    for (var i = 0; i < nAdditionalchar; i++) {
      var passWordallCriteria = lowerCasecharacters[Math.floor(Math.random() * lowerCasecharacters.length)];
        console.log("This is the current value of i: " + i + ".");
        console.log(passWordallCriteria);
        passLowercase = passLowercase + passWordallCriteria
        console.log(passLowercase);
    }
  } else if (nAdditionalchar != 0 && upperCaseNeeded=== "Y") {
    for (var i = 0; i < nAdditionalchar; i++) {
      var passWordallCriteria = upperCasecharacters[Math.floor(Math.random() * upperCasecharacters.length)];
        console.log("This is the current value of i: " + i + ".");
        console.log(passWordallCriteria);
        passUppercase = passUppercase + passWordallCriteria
        console.log(passUppercase);
    }
  } else if (nAdditionalchar != 0 && specialCharacterNeeded === "Y") {
    for (var i = 0; i < nAdditionalchar; i++) {
      var passWordallCriteria = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
        console.log("This is the current value of i: " + i + ".");
        console.log(passWordallCriteria);
        passSpclChar = passSpclChar + passWordallCriteria
        console.log(passSpclChar);
    }
  } else if (nAdditionalchar != 0 && numericNeeded === "Y") {
    for (var i = 0; i < nAdditionalchar; i++) {
      var passWordallCriteria = numericCharcters[Math.floor(Math.random() * numericCharcters.length)];
        console.log("This is the current value of i: " + i + ".");
        console.log(passWordallCriteria);
        passNumber = passNumber + passWordallCriteria
        console.log(passNumber);
    }
  }


  passWord = passLowercase + passUppercase + passSpclChar + passNumber;
  console.log("password generated", passWord);
  console.log("length of password", passWord.length);

}




//This function ties everything together and will be called upon user clicking generate password button
function generatePassword() {
  getUserinputs ()

  if (stop === true) {
    return;
  }

  validatePasswordcriteria ()

  if (validPasswordcriteria === false) {
    do {
      alert("You need to select at least one password criteria. Please try again");
      getUserinputs()
      validatePasswordcriteria()
    } while (validPasswordcriteria === false);
  }

  generateThepassword()

}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passWord;
  console.log("write")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
