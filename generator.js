 function doMakePassword() {
    var length = prompt("Enter password length:")
    if (length < 8 || length > 128) {
        alert("Length must be between 8 and 128")
    } else {
        var useSpecial = confirm("Click OK to enable special characters")
        var useNumber = confirm("Click OK to enable numbers")
        var useLowercase = confirm("Click OK to enable lowercase letters")
        var useUppercase = confirm("Click OK to enable uppercase letters")
        var passwordTag = document.getElementById("password")
        passwordTag.innerHTML = makePassword(length,useSpecial,useNumber, useLowercase, useUppercase)
        var copyButtonTag = document.getElementById("copyButton")
        copyButtonTag.disabled = false
    }
}

function copyPassword() {
    var passwordTag = document.getElementById("password")
    var password = passwordTag.innerHTML;
    navigator.clipboard.writeText(password)   
}


function makePassword(length,useSpecial,useNumber,useLowercase,useUppercase) 
    {
    var password = "";

    var specialChars = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~",]
    var numbers = ["1", "2","3", "4", "5", "6", "7", "8", "9","0"]
    var lowerCase = [ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m",]
    var upperCase = [ "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M",]

    if (!useSpecial && !useNumber && !useLowercase && !useUppercase) {
        alert("You must select at least 1 type of character");
        return;
    }

    var passwordChars = []
    if (useSpecial) {
        passwordChars = passwordChars.concat(specialChars)
    }

    if (useNumber) {
        passwordChars = passwordChars.concat(numbers)
    }


    if (useLowercase) {
        passwordChars = passwordChars.concat(lowerCase)
    }
    if (useUppercase){
        passwordChars = passwordChars.concat(upperCase)
    }

    for (var i=0; i < length; i++) {
        var r = Math.floor(Math.random()*passwordChars.length)
        password = password.concat(passwordChars[r])
    }
    return password; 
}