// Duplicate Integer
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:

// Input: nums = [1, 2, 3, 3]

// Output: true
// Example 2:

// Input: nums = [1, 2, 3, 4]

// Output: false


const duplicateIntegers = (nums) => {
  const seenElements = new Set()
  for(let num of nums) {
    if(seenElements.has(num)) {
      return true
    }
    seenElements.add(num)
  }

  return false

}
