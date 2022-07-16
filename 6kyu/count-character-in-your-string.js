// DESCRIPTION:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

//My Solution 
function count (string) {  
    // The function code should be here
    if(string.length < 1){
         return {}
    }
    else{
      let map = {}
      for(i = 0; i < string.length; i++){
        if(string[i] in map){
          map[string[i]] += 1
        }
        else{
          map[string[i]] = 1
        }
      }
      return map
    }
  }