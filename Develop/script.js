// Assignment Code
var generateBtn = document.querySelector("#generate");
var specific = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function randomlowercase(){
  return String.fromCharCode (Math.floor(Math.random() * 26) + 97);

}



function randomuppercase(){
  return String.fromCharCode (Math.floor(Math.random() * 26) + 65);

}


function randomnumber(){
  return String.fromCharCode (Math.floor(Math.random() * 10) + 48);

}

function randomsymbol(){
  var symbol = "`!@#$%^&*()_+=[]{}:?/.,<>"
  return symbol [Math.floor(Math.random() * symbol.length)]

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var result = ""

  var length = prompt ("Choose the number of characters you want in the password, choose from 8-128")

  var hasrandomlowercase = confirm("Do you want to include lowercase letters?");
  var hasrandomuppercase = confirm("Do you want to include uppercase letters?");
  var hasrandomnumber = confirm("Do you want to include numbers?");
  var hasrandomsymbol = confirm("Do you want to include special characters?");

  if(hasrandomlowercase){
    specific += randomlowercase()

  }
  if(hasrandomuppercase){
    specific += randomuppercase()

  }
  if(hasrandomnumber){
    specific += randomnumber()

  }
  if(hasrandomsymbol){
   specific += randomsymbol()

  }

  for (var i = 0; i < length; i++){
    result += specific;
  }

  return result
}





