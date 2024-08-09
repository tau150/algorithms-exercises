// SLIDING WINDOW
// Given an array, find the average of all continuous sub-arrays of size K

// [1,2,3,4,5], k = 3
// In this case I have to calculate the average of 123, 234 and 345

// The result would be [2,3,4] -> The average of 123 is 2, the average of 234 is 3, the average of 345 is 4


const averageOfSubArrays = (arr, size) => {
  const averages = []
  let startPoint = 0;
  let prevSum = 0;

  for(let i = 0; i < arr.length; i++){
    prevSum += arr[i]
    if(i >= size){
      averages.push(prevSum / size)
      prevSum -= arr[startPoint]
      startPoint ++
    }
  }

 return averages;
}




