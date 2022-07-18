// DESCRIPTION:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

//My Solution
function incrementString(strng) {
    // return incrementedString
    for (i = 0; i < strng.length; i++){
        if (/[0-9]/.test(strng[i])) {
            let letters = strng.slice(0, i)
            let numbers = parseInt(strng.slice(i)) + 1
            let numLength = strng.slice(i).length
            return (letters + numbers.toString().padStart(numLength, "0"))
        }
    }
    return strng + 1
}