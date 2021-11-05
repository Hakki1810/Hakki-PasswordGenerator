// TO DO
// 1- create empty arrray
// 2- for every user choice we push the respective function into the array
// 3- We iterate and call a random function
// 4 - if else statement : if user doesn't choose any characters alert "you have to choose one"
// 5- if the user doesn't input a password length or the password is less than 8 or more than 128 or if the password is not a number, alert "Something"
// 6-

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function randomlowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomuppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomnumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomsymbol() {
  var symbol = "`!@#$%^&*()_+=[]{}:?/.,<>";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

function randomchoose(n) {
  return Math.floor(Math.random() * n);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let functionsArray = [];
  var result = "";

  var passwordLength = prompt(
    "Choose the number of characters you want in the password, choose from 8-128"
  );
  if (isNaN(passwordLength)) {
    alert("Input a number only");
    return generatePassword();
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 -128");
    return generatePassword();
  }

  var parsedPasswordLength = parseInt(passwordLength, 10);

  var hasrandomlowercase = confirm("Do you want to include lowercase letters?");
  var hasrandomuppercase = confirm("Do you want to include uppercase letters?");
  var hasrandomnumber = confirm("Do you want to include numbers?");
  var hasrandomsymbol = confirm("Do you want to include special characters?");
  if (
    !hasrandomlowercase &&
    !hasrandomuppercase &&
    !hasrandomnumber &&
    !hasrandomsymbol
  ) {
    alert("Choose at least one character type");
    return generatePassword();
  }
  if (hasrandomlowercase) {
    functionsArray.push(randomlowercase());
  }
  if (hasrandomuppercase) {
    functionsArray.push(randomuppercase());
  }
  if (hasrandomnumber) {
    functionsArray.push(randomnumber());
  }
  if (hasrandomsymbol) {
    functionsArray.push(randomsymbol());
  }
  console.log(functionsArray);

  for (var i = 0; i < passwordLength; i++) {
    result += functionsArray[randomchoose(functionsArray.length)]();
  }

  return result;
}
