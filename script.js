// Assignment Code
var generateBtn = document.querySelector("#generate");
var specific = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function randomlowercase() {
  console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var result = "";

  var passwordLength = prompt(
    "Choose the number of characters you want in the password, choose from 8-128"
  );

  const parsedPasswordLength = parseInt(passwordLength, 10);
  console.log(passwordLength, parsedPasswordLength);
  if (parsedPasswordLength < 8 || parsedPasswordLength > 128) {
    alert("Please choose a number between 8 - 128");
    return;
  } else {
    var hasrandomlowercase = confirm(
      "Do you want to include lowercase letters?"
    );
    var hasrandomuppercase = confirm(
      "Do you want to include uppercase letters?"
    );
    var hasrandomnumber = confirm("Do you want to include numbers?");
    var hasrandomsymbol = confirm("Do you want to include special characters?");

    if (hasrandomlowercase) {
      specific += randomlowercase();
      console.log(hasrandomlowercase);
    }

    if (hasrandomuppercase) {
      specific += randomuppercase();
      console.log(hasrandomuppercase);
    }

    if (hasrandomnumber) {
      specific += randomnumber();
      console.log(hasrandomnumber);
    }

    if (hasrandomsymbol) {
      specific += randomsymbol();
      console.log(hasrandomsymbol);
    }

    for (var i = 0; i < length; i++) {
      result += specific.charAt(Math.floor(Math.random() * specific.length));
      console.log(result);
    }
  }
  return result;
}
