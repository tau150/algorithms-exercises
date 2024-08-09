// Given an array and a target, return the first pair that their sum match with the target, the array is sorted

const twoSumWith2Pointers = (nums, target) => {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while(leftPointer < rightPointer){
   const pairSum = nums[leftPointer] + nums[rightPointer]
   if(pairSum === target){
     return [nums[leftPointer], nums[rightPointer]]
   }
   if(pairSum < target){
     leftPointer++
   }else{
     rightPointer--
   }
  }

  return null;
 }

