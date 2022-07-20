// DESCRIPTION:
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

//My Solution
function rot13(message) {
    //Get ASCII code for each letter
    let temp = []
    for (i = 0; i < message.length; i++) {
        //Checks if it is lowercase
        if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
            let value = message.charCodeAt(i) + 13
            //Loops through the lowercase alphabet if ascii code push it out of appropriate range
            if (value > 122) {
                value = value - 122 + 96
                temp.push(String.fromCharCode(value))
            }
            else {
                temp.push(String.fromCharCode(value))
            }
        }
        //Checks if it is uppercase
        else if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
            let value = message.charCodeAt(i) + 13
            //Loops through the uppercase alphabet if ascii code push it out of appropriate range
            if (value > 90) {
                value = value - 90 + 64
                temp.push(String.fromCharCode(value))
            }
            else {
                temp.push(String.fromCharCode(value))
            }
        }
        //Since its is neither an uppercase or lowercase alphabet its must be a number / special character
        else {
            let value = message.charCodeAt(i)
            temp.push(String.fromCharCode(value))
        }
    }
    return (temp.join(""))
}