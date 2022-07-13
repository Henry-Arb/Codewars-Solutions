// DESCRIPTION:
// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

//My Solution
function towerBuilder(nFloors) {
    // build here
    let pyramid = []
    let totalFloorWidth = (nFloors * 2) - 1
    let numOfBlocks = 1
    for (i = 0; i < nFloors; i++) {
        let block = "*"
        if (nFloors <= 1) {
            pyramid.push(block)
        }
        else {
            let currFloor = block.repeat(numOfBlocks)
            currFloor = currFloor.padStart(currFloor.length + (totalFloorWidth - numOfBlocks) / 2)
            currFloor = currFloor.padEnd(currFloor.length + ((totalFloorWidth - numOfBlocks) / 2))
            pyramid.push(currFloor)
            numOfBlocks = numOfBlocks + 2
        }
    }
    return pyramid
}