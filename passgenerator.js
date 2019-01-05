function main() {
    // Generate the password length
    var minPasswordLength = 15;
    var maxPasswordLength = 30;
    var passLength = randomIntFromInterval( minPasswordLength, maxPasswordLength );

    // Create an empty array of that length
    var password = new Array( passLength );

    // Add two uppercase letters to the array
    password = addTwoUppercaseLetters( password );

    // Fill the rest of the array with random characters
    password = fillArray( password );

    // Display the Array in the HTML page
    var li = document.getElementById("pass");
    li.innerHTML = passText;
    
    var attempt = 0;
    while ( attempt < 100 ) {
        var passText = passGenerator();
      //  if ( passText.includes )
        attempt++;
    }

}

/*

// Functioning Password Generator
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
*/

function randomIntFromInterval( min, max ) // min and max included
{
    return Math.floor(Math.random() * ( max - min + 1 ) + min );
}

function addTwoUppercaseLetters( password ) {
    return "";
}