// Assignment code here
var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','_','=','+','~'];
var lowerCassArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0',];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function getPrompts(){
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters do you want your password? (8-128 characters"));
 
   if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("character length has to be number 8 -128. try again.");
    choiceArr = choiceArr.concat(characterLength);
    return false;
   }
   if (confirm("would you like lowercase letters?")) {
    choiceArr = choiceArr.concat(lowerCassArr);
   
   }
   if (confirm("would you like uppercase letters?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
   }

   if (confirm("would you like special characters?")) {
    choiceArr = choiceArr.concat(specialCharArr);
   }

   if (confirm("would you like numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
   }
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex];
      console.log("writePassword");
    }
  }
