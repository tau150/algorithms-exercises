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

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
