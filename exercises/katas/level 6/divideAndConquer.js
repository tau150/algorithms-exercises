// Create a function that takes a list of integers and a group length as parameters. Your task is to determine if it's possible to split all the numbers from the list into groups of the specified length, while ensuring that consecutive numbers are present within each group.

// Input
// lst / arr: A list / array of integers representing the numbers to be divided into groups.

// group_len / groupLen: An integer indicating the desired length of each group.

// Output
// The function should return True if it's possible to create groups according to the criteria, and False otherwise.

// Examples
// consecutiveNums([1, 3, 5], 1) ➞ true
// // It is always possible to create groups of length 1.

// consecutiveNums([5, 6, 3, 4], 2) ➞ true
// // Two groups of length 2: [3, 4], [5, 6]

// consecutiveNums([1, 3, 4, 5], 2) ➞ false
// // It is possible to make one group of length 2, but not a second one.

// consecutiveNums([1, 2, 3, 6, 2, 3, 4, 7, 8], 3) ➞ true
// // [1, 2, 3], [2, 3, 4], [6, 7, 8]

// consecutiveNums([1, 2, 3, 4, 5], 4) ➞ false
// // The list length is not divisible by the group’s length.
// Input Constraints
// 3 <= arr.length <= 10^4
// 1 <= groupLen <= 10

function areConsecutive(array) {
  const minValue = Math.min(...array);
  const maxValue = Math.max(...array);
  const expectedLength = maxValue - minValue + 1;

  return array.length === expectedLength;
}


function consecutiveNums(arr, groupLen){

  if(groupLen === 1 ){
    return true
  }

  if(arr.length % groupLen !== 0){
    return false
  }

  const result = []
  const orderedArray = arr.sort( (a, b) => a - b)

  while(orderedArray.length){
    const elementToMove = orderedArray.shift()
    const firstIncompleteArray = result.find(array => array.length < groupLen &&  !array.includes(elementToMove))

     if(firstIncompleteArray){
        firstIncompleteArray.push(elementToMove)
      } else {
        result. push([elementToMove])
      }
  }

    return result.every(group =>  group.length === groupLen && areConsecutive(group))
  }


/// ALTERNATIVE SOLUTION, BETTER PERFORMANCE



// function consecutiveNums(arr, groupLen){

//   if(groupLen === 1 ){
//     return true
//   }

//   if(arr.length % groupLen !== 0){
//     return false
//   }

//   const result = []
//   const orderedArray = arr.sort()

//   while(orderedArray.length){
//     const elementToMove = orderedArray.shift()

//     let firstIncompletedArray;

//     for(let array of result){
//       if(array.length < groupLen && groupLen && !array.includes(elementToMove)){
//         firstIncompletedArray = array;
//         break;
//       }
//     }

//      if(firstIncompletedArray){
//         firstIncompletedArray.push(elementToMove)
//       } else {
//         result. push([elementToMove])
//       }
//   }

//     let isValid = true

//     for(let group of result){
//       if( group.length !== groupLen || !areConsecutive(group)){
//         return false
//       }
//     }

//   return isValid
//   }

