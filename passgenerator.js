function main() {
    
    var attempt = 0;
    while ( attempt < 100 ) {
        var passText = passGenerator();
      //  if ( passText.includes )
        attempt++;
    }
    var li = document.getElementById("pass");
    li.innerHTML = passText;
}

function passGenerator() {
    var passwordLength = 30;
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@$=^!*_";
    var passText = "";

    for (var i = 0; i < passwordLength; i++) {
        passText += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
    }

    return "Password is:<br>" + passText;
}