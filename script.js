//setting variables
var passLengthEl; ; 
var lowercaseEl; 
var uppercaseEl; 
var numbersEl; 
var symbolEl; 
var newPassEl;

// set up functions for selected randomized criteria
// 1 choices
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
 function sym(length) {
   var result           = '';
   var characters       = '!@#$%&*?';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
// 4 choices
function lowUpNumSym(length) {
   var result           = '';
   var characters       = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
// 3 choices
function lowUpNum(length) {
   var result           = '';
   var characters       = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
function lowUpSym(length) {
   var result           = '';
   var characters       = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*?';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
function UpNumSym(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*?';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// 2 choices
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
 function lowSym(length) {
   var result           = '';
   var characters       = 'abcdefghijklmnopqrstuvwxyz!@#$%&*?';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
function upSym(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*?';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
function numSym(length) {
   var result           = '';
   var characters       = '123456789!@#$%&*?';
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
        symbolEl = confirm("Last question: would you like special characters?");
    }

    if (!lowercaseEl && !uppercaseEl && !numbersEl && !symbolEl ) {
        alert("Please select atleast 1 of the 4 criteria");
    }
    // 4 choices
    else if ( lowercaseEl && uppercaseEl && numbersEl && symbolEl) {
        alert(lowUpNumSym(passLengthEl));
    }

    // 3 choices========================================== 
    else if ( lowercaseEl && uppercaseEl && numbersEl ) {
        alert(lowUpNum(passLengthEl));
    }
    else if ( lowercaseEl && uppercaseEl && symbolEl ) {
      alert(lowUpSym(passLengthEl));
    }
    else if ( uppercaseEl && numbersEl && symbolEl ) {
      alert(UpNumSym(passLengthEl));
    }
    
    // 2 choices================================
    else if ( lowercaseEl && uppercaseEl ) {
        alert(lowUp(passLengthEl));
    }
    else if ( lowercaseEl  && numbersEl ) {
        alert(lowNum(passLengthEl));
    }
    else if ( lowercaseEl && symbolEl ) {
        alert(lowSym(passLengthEl));
    }
    else if ( uppercaseEl && numbersEl ) {
      alert(upNum(passLengthEl));
    }
    else if ( uppercaseEl && symbolEl ) {
      alert(upSym(passLengthEl));
    }
    else if ( numbersEl && symbolEl ) {
      alert(numSym(passLengthEl));
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
    else if ( symbolEl ) {
        alert(sym(passLengthEl));
    }
 }

//call function
generatePassword();





