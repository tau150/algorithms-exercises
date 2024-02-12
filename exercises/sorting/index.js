// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length - i; j++){
      if(arr[j] > arr[j + 1]){
        const temp = arr[j+1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }

  return arr
}

function bubbleSortWithWhile(arr) {
  const n = arr.length;
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  }
}


function selectionSort(arr) {

}

function mergeSort(arr) {

  if(arr.length< 2){
    return arr
  }

  const midPoint = Math.floor((arr.length / 2))

  const left = arr.slice(0, midPoint)
  const right = arr.slice(midpoint)

  return merge(mergeSort(left),   mergeSort(right))

}

function merge(left, right) {
  const result = [];

  while(left.length && right.length){
    if(left[0] <= right[0]){
      result.push(left.shift())
    }else{
      result.push(right.shift())
    }
  }

  return result.concat(left, right)

}


function insertionSort(nums){
  for(let i = 1; i < nums.length; i ++){
    let numberToInsert = nums[i]
    let j;

    for(j = i -1; nums[j] > numberToInsert && j >= 0; j--) {
      nums[j + 1] = nums[j]
    }

    nums[j + 1] = numberToInsert
  }

 return nums
}


function quickSort(nums) {
  // base case, arrays of length 0 or 1 are sorted already
  if (nums.length <= 1) return nums;

  // last number is the pivot
  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];

  // sort all smaller numbers than the pivot into left
  // and all bigger numbers into right
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]

}


function getDigit(number, place, longestNumber) {
  const string = number.toString();
  const size = string.length;

  const mod = longestNumber - size;
  return string[place - mod] || 0;
}

function findLongestNumber(array) {
  let longest = 0;
  for (let i = 0; i < array.length; i++) {
    const currentLength = array[i].toString().length;
    longest = currentLength > longest ? currentLength : longest;
  }
  return longest;
}

function radixSort(array) {
  const longestNumber = findLongestNumber(array);

  const buckets = new Array(10).fill().map(() => []); // make an array of 10 arrays

  for (let i = longestNumber - 1; i >= 0; i--) {
    while (array.length) {
      const current = array.shift();
      buckets[getDigit(current, i, longestNumber)].push(current);
    }

    for (let j = 0; j < 10; j++) {
      while (buckets[j].length) {
        array.push(buckets[j].shift());
      }
    }
  }

  return array;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge, insertionSort, bubbleSortWithWhile, quickSort, radixSort };
