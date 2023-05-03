var charsLower = "abcdefghijklmnopqrstuvwxyz";
var charsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charsNumeric = "0123456789";
var charsSpecial = "@%+\/'!#$^?:,(){}[]~-_.";     // on link for OWASP, I chose the list/subset accepted by MS/Oracle

function generatePassword() {
    var pwdLength;
    var useLowercase = false;
    var useUppercase=false;
    var useNumeric=false;
    var useSpecialChars=false;
    var charsToUse = ""; 
    var newPassword = "";
    var invalidEntry;


    //User is prompted to choose length of password.
        pwdLength = window.prompt("Enter desired length of password. (Note that the length must be a number between 8 and 128): ");
        //includes VALIDATION: will prompt user until LENGTH IS BE BETWEEN 8 and 128
        while (pwdLength < 8 || pwdLength > 128) {
          pwdLength = window.prompt("*INVALID ENTRY* The length must be a number between 8 and 128. Please re-enter desired length of password: ");
        } 
       
        do  {
            //User is prompted to specify 4 char types for password

            // 1 - specify if want to use lowercase. Defaults to true.
            useLowercase = window.confirm("Include lowercase? (Yes/No) ");

            // 2 - specify if want to use uppercase. Defaults to true.
            useUppercase = window.confirm("Include uppercase? (Yes/No) ");

            // 3 - specify if want to use numeric values. Defaults to true.
            useNumeric = window.confirm("Include numeric values? (Yes/No) ");

            // 4 - specify if want to use special chars. Defaults to true.
            useSpecialChars = window.confirm("Include special chars? (Yes/No) ");

            //VALIDATION: if no character type has been selected, alert user and do over.
            if (!useLowercase && !useUppercase && !useNumeric && !useSpecialChars) 
                {
                window.alert("*INVALID ENTRY* At least 1 character type must be selected. Returning to the selection process.");
                invalidEntry = true;
                }
            else { invalidEntry = false;}
          }
        while (invalidEntry);

    //build one string of all chars to use for the random pwd generator
    //also add 1 of each selected char type, to ensure pwd contains at least 1 of each type
        if (useLowercase)    {
          charsToUse = charsLower;
          var randomNumber = Math.floor(Math.random() * charsLower.length);   
          newPassword += charsLower.substring(randomNumber, randomNumber +1); 
          }
      if (useUppercase)    {
          charsToUse = charsToUse + charsUpper;
          var randomNumber = Math.floor(Math.random() * charsUpper.length);   
          newPassword += charsUpper.substring(randomNumber, randomNumber +1); 
          }
      if (useNumeric)      {
          charsToUse = charsToUse + charsNumeric;
          var randomNumber = Math.floor(Math.random() * charsNumeric.length);   
          newPassword += charsNumeric.substring(randomNumber, randomNumber +1); 
          }
      if (useSpecialChars) {
          charsToUse = charsToUse + charsSpecial;
          var randomNumber = Math.floor(Math.random() * charsSpecial.length);   
          newPassword += charsSpecial.substring(randomNumber, randomNumber +1); 
          }
             
    console.log("after inserting 1 each of char type, newPassword = " + newPassword + " and length = " + newPassword.length)

    // generate rest of new password for user-specified length and char type(s), using Math.random and Math.floor
      for (var i = newPassword.length; i < pwdLength; i++) {
        var randomNumber = Math.floor(Math.random() * charsToUse.length);
        newPassword += charsToUse.substring(randomNumber, randomNumber +1);
      }

    // return newly-created password
    return newPassword;

//end of function generatePassword()
}

// Assignment Code for generate button
var generateBtn = document.querySelector("#generate");

// Assignment Code for copy button
var copyBtn = document.querySelector("#copy");

// call function to create a password; Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log("writePassword function was executed, and passwordText.value= " + passwordText.value)
}

// call function to copy the password from the web page to the clipboard
//isn't there a way to do this all in html?
function copyPassword() {
  var copyPasswordText = document.querySelector("#password");
  navigator.clipboard.writeText(copyPasswordText.value)
  console.log("copyPassword function was executed, and copyPasswordText.value= " + copyPasswordText.value)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to COPY button
copyBtn.addEventListener("click", copyPassword);

