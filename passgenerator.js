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
    var minPasswordLength = 15;
    var maxPasswordLength = 30;
    var passLength = randomIntFromInterval( minPasswordLength, maxPasswordLength );
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@$=^!*_";
    var passText = "";

    for (var i = 0; i < passLength; i++) {
        passText += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
    }

    return "Password Length is: " + passLength + "<br>Password is:<br>" + passText;
}

function randomIntFromInterval( min, max ) // min and max included
{
    return Math.floor(Math.random() * ( max - min + 1 ) + min );
}