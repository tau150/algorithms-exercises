// Two Integer Sum
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

// Example 1:

// Input:
// nums = [3,4,5,6], target = 7

// Output: [0,1]
// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

// Example 2:

// Input: nums = [4,5,6], target = 10

// Output: [0,2]
// Example 3:

// Input: nums = [5,5], target = 10

// Output: [0,1]
// Constraints:

// 2 <= nums.length <= 1000
// -10,000,000 <= nums[i] <= 10,000,000
// -10,000,000 <= target <= 10,000,000


// Better solution, O(n)

const twoSumB = (nums, target) => {
  const map = {}

  for(let [index, num] of nums.entries()){
    const diff = target - num

    if(map[diff]){
      return [num, map[diff]]
    }

    map[num] = index
  }
};



// This is not too efficient, is not a good solution O(n2)
const twoSum = (nums, target) => {
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[i] + nums[j] === target){
        return [i, j];
      }
    }
  }
};