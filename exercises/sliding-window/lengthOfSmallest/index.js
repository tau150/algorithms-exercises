// SLIDING WINDOW

// Given an array of positive numbers and a positive number s, find the length of the smallest contiguous subarray whose sum is greater than or equal to s.
// Return 0 is no such subarray exists


const lengthOfSmallest = (arr, s) => {

  let start = 0;
  let sum = 0;
  let minLength = Infinity

  for(let end = 0; end < arr.length; end++){

    sum+= arr[end]

    while(sum >= s){
      minLength = Math.min(minLength, end - start + 1)
      sum -= arr[start]
      start ++
    }

  }

  return  minLength === Infinity ? 0 : minLength;
}