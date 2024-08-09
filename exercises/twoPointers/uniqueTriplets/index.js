// Given an array of unsorted numbers, find all unique triplets in it that add up to zero

// [-3, 0, 1, 2, -1, 1, -2] -> [ [-3,1,2], [-2,0,2], [-2,1,1], [-1,0,1]]

const uniqueTriplets = (nums) => {
  let triplets = [];
  const sortedNums = nums.sort( (a,b) => a - b);

  for(let i = 0; i < sortedNums.length; i++){
    let targetSum = -sortedNums[i]

    // we want to avoid duplicate triplets
    // if the element we are looking at is the same at the element we just looked at, its triplet will be identical.
    // skip it
    if(i > 0 && sortedNums[i] === sortedNums[i-1]){
      continue;
    }

    searchPairs(sortedNums, targetSum, i + 1, triplets)


  }

  return triplets
}



const searchPairs = (arr, target, leftPointer, triplets) => {
  let rightPointer = arr.length - 1;

  while(leftPointer < rightPointer){
      const currentSum = arr[leftPointer] + arr[rightPointer]
      // we found a triplet
      if(currentSum === target) {
        triplets.push(-target, arr[leftPointer], arr[rightPointer])
        leftPointer++
        rightPointer--
        // move the left pointer up until we get an integer that is different
        while(leftPointer < rightPointer && arr[leftPointer] === arr[leftPointer - 1]){
          leftPointer++
        }
        while(leftPointer < rightPointer && arr[rightPointer] === arr[rightPointer + 1]){
          rightPointer--
        }
      }else if(targetSum > currentSum){
        leftPointer++
      }else if(targetSum < currentSum){
        rightPointer--
      }
  }

}