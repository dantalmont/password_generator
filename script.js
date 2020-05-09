





//setting variables
var passLengthEl; ; 
var lowercaseEl; 
var uppercaseEl; 
var numbersEl; 
var symbolEl; 
var newPassEl = document.createElement("h2");

// set up functions for selected randomized criteria
function low(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function up(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function num(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function lowUpNum(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function lowUp(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function upNum(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function lowNum(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
function generatePassword () {

    passLengthEl = parseInt(prompt("how many characters long would you like your new password? Choose between 8 and 128."));

    if (!passLengthEl) {
        alert("this needs a value!");
    }
    else if (passLengthEl < 8 || passLengthEl > 128) {
        passLengthEl = parseInt(prompt("must be between 8 and 128"));
    }
    else {
        lowercaseEl = confirm("would you like to include lowercase letters?");
        uppercaseEl = confirm("would you like to include uppercase letters?");
        numbersEl = confirm("Would you like to include numbers?");
        //symbolEl = confirm("Last question: would you like special characters?");
    }

    if (!lowercaseEl && !uppercaseEl && !numbersEl ) {
        alert("Please select atleast 1 of the 3 criteria");
    }

    // 3 choices========================================== 
    else if ( lowercaseEl && uppercaseEl && numbersEl ) {
        alert(lowUpNum(passLengthEl));
    }

    // 2 choices================================
    else if ( lowercaseEl && uppercaseEl ) {
        alert(lowUp(passLengthEl));
    }
    else if ( lowercaseEl  && numbersEl ) {
        alert(lowNum(passLengthEl));
    }
    else if ( uppercaseEl && numbersEl ) {
        alert(upNum(passLengthEl));
    }
    
    // 1 choice==============================
    else if ( lowercaseEl ) {
        alert(low(passLengthEl))
    }
    else if ( uppercaseEl ) {
        alert(up(passLengthEl))
    }
    else if ( numbersEl ) {
        alert(num(passLengthEl));
    }  
 }

//call function
generatePassword();

      

    

 