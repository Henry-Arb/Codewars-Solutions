// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

//My Solution
function isIsogram(str) {
    //...
    let tempArr = str.toLowerCase().split("")
    return tempArr.every(x => tempArr.indexOf(x) === tempArr.lastIndexOf(x))
}