// DESCRIPTION:
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]

//My Solution
function twoSum(numbers, target) {
    // ...
    let map = {}
    let index = []
    //Loops through the array of numbers
    for (i = 0; i < numbers.length; i++) {
        //checks if target minus the current value doesn't currently exist in the object. if doesn't make the current value the key, and its value itself.
        if (!(target - numbers[i] in map)) {
            map[numbers[i]] = numbers[i]
        }

        //if key does exist, return the index of difference and push into the index array, as well as pushing current value to the array.
        else {
            index.push(numbers.indexOf(map[target - numbers[i]]))
            index.push(i)
        }

        //Since question only asked for 1 pair of values to reach the target, for loop breaks when index.length = 2.
        if (index.length === 2) {
            break;
        }
    }
    return index
}