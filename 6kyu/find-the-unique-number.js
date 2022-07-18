// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.
function findUniq(arr) {
    // do magic
    let map = new Map()
    let unique = 0
    arr.forEach(x => {
      if(!map.has(x)){
       map.set(x, 1)
      }
      else{
        map.set(x, map.get(x)+1)
      }
    })
    for(var[key, value] of map.entries()){
      if(value === 1){
        unique = key
      }
    }
     return unique
  }