// DESCRIPTION:
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//My Solution
function correct(string) {
    let temp = string
    temp = temp.replace(/0/g, "O")
    temp = temp.replace(/1/g, "I")
    temp = temp.replace(/5/g, "S")
    return temp
}