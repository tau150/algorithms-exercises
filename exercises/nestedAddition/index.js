// Let's say I give an array. In this array there are two types of things: numbers and more arrays.
// In those arrays, they too are numbers and more arrays. An example could be [1, 2, 3, 4, 5, [6, 7, 8], 9, [[10, 11], 13, [14]]].
// This would take all of these numbers, regardless of how nested they are, and add them together.


// use recursion.

function nestedAdd(arr){
  let counter = 0;

  for(let i = 0; i < arr.length; i++) {
    const current = arr[i]
    if(Array.isArray(current)) {
      counter += nestedAdd(current)
    }else{
      counter += current
    }
  }

  return counter



}

module.exports = nestedAdd