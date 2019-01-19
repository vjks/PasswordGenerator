function main() {
    // Generate the password length
    var minPasswordLength = 15;
    var maxPasswordLength = 30;
    var numOfUppercase = 2;
    var passLength = randomIntFromInterval( minPasswordLength, maxPasswordLength );

    // Create an empty array of that length
    var password = new Array( passLength );

    // Add two uppercase letters to the array
    password = addTwoUppercaseLetters( password,  );

    // Fill the rest of the array with random characters
    password = fillArray( password );

    // Display the contents of the array in the HTML page
    var passText = "";  // Initially the variable is empty it will contain the text of the password array
    for( var i = 0; i < password.length; i++ ) {
        passText += password[ i ]; 
    }

    var li = document.getElementById("pass");
    li.innerHTML = passText;
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

function randomIntFromInterval( min, max ) {// min and max included
    return Math.floor(Math.random() * ( max - min + 1 ) + min );
}

function addTwoUppercaseLetters( password, numOfChars ) {
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < numOfChars; i++) {
        passText += alphabets.charAt(Math.floor(Math.random() * alphabets.length));
        location = randomIntFromInterval( minPasswordLength, maxPasswordLength );
        if( password[ location ] is not empty ) {
        	password[ location ] = char;
        }
    }
    // Generate two random numbers between 15 and 30, including 15 and 30. 

    // In a for loop add the chars at the two randomly generated spots. If the spot already exists then add it to the next spot.
    return password;
}

function fillArray( password ) {
    return password;
}