var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsNumeric = "0123456789";
// on link for OWASP, I chose the list accepted by MS/Oracle: https://docs.oracle.com/cd/E11223_01/doc.910/e11197/app_special_char.htm
var charsSpecial = "@%+\/'!#$^?:,(){}[]~-_.";

function generatePassword() {
    var pwdLength = 8;
    var useLowercase;
    var useUppercase;
    var useNumeric;
    var useSpecialChars;
    var charsToUse = "";  

    //User is prompted to choose length of password. Defaults to 8 chars. 
        //includes VALIDATION: will prompt user until LENGTH IS BE BETWEEN 8 and 128
        do {
          pwdLength = window.prompt("Enter desired length of password. (Note that the length must be a number between 8 and 128): ");
        } while (pwdLength < 8 || pwdLength > 128)
        console.log(pwdLength)

    //User is prompted to specify 4 char types for password
        // 1 - specify if want to use lowercase. Defaults to true.
        useLowercase = window.confirm("Include lowercase? (Yes/No) ");

        // 2 - specify if want to use uppercase. Defaults to true.
        useUppercase = window.confirm("Include uppercase? (Yes/No) ");

        // 3 - specify if want to use numeric values. Defaults to true.
        useNumeric = window.confirm("Include numeric values? (Yes/No) ");

        // 4 - specify if want to use special chars. Defaults to true.
        useSpecialChars = window.confirm("Include special chars? (Yes/No) ");

    //build string of chars to use for this pwd, per user input above
        if (useLowercase)    {charsToUse = charsLower;}
        if (useUppercase)    {charsToUse = charsToUse + charsUpper;}
        if (useNumeric)      {charsToUse = charsToUse + charsNumeric;}
        if (useSpecialChars) {charsToUse = charsToUse + charsSpecial;}

        //VALIDATION: if no character type has been selected, password generator will alert user that it will default to lower, upper and numeric
        if (!useLowercase && !useUppercase && !useNumeric && !useSpecialChars) 
          {
            charsToUse = charsLower + charsUpper + charsNumeric;
            window.alert("Since no character type was selected, password generator will use lower, upper and numeric.");
          } 

    // generate new password for user-specified length and character set, using Math.random and Math.floor
    // since starting i = 0, must use < pwdLength, not <= pwdLength
    var newPassword = ""
      for (var i = 0; i < pwdLength; i++) {
        var randomNumber = Math.floor(Math.random() * charsToUse.length);
        newPassword += charsToUse.substring(randomNumber, randomNumber +1);
      }

    // return newly-created password
    return newPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// call function to create a password; Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log("writePassword function was executed, and passwordText.value= " + passwordText.value)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);