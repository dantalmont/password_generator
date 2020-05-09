






var passLengthEl; //= parseInt(prompt("how many characters long would you like your new password? Choose between 8 and 128.")); 
var lowercaseEl; //= confirm("would you like to include lowercase letters?");
var uppercaseEl; //= confirm("would you like to include uppercase letters?");
var numbersEl; //= confirm("Would you like to include numbers?");
var symbolEl; //= confirm("Last question: would you like special characters?");
var newPassEl; //= document.querySelector("password");

confirm("would you like to use this password generator?")


function makeid(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function makeid2(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function makeid3(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function makeid4(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function makeid5(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function makeid6(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 function makeid7(length) {
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
        alert(makeid4(passLengthEl));
    }

    // 2 choices================================
    else if ( lowercaseEl && uppercaseEl ) {
        alert(makeid5(passLengthEl));
    }
    else if ( lowercaseEl  && numbersEl ) {
        alert(makeid7(passLengthEl));
    }
    else if ( uppercaseEl && numbersEl ) {
        alert(makeid6(passLengthEl));
    }
    
    // 1 choice==============================
    else if ( lowercaseEl ) {
        alert(makeid(passLengthEl))
    }
    else if ( uppercaseEl ) {
        alert(makeid2(passLengthEl))
    }
    else if ( numbersEl ) {
        alert(makeid3(passLengthEl))
    }
   
 }

    generatePassword();
 