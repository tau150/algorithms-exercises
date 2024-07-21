// Write an algorithm that takes an array and moves all the zeros to the end.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


// Solution 1



function moveZeros(arr){

const nonZeros = []
const zeros = []


arr.forEach(element => {
  if(element === 0){
    zeros.push(0)
  }else{
    nonZeros.push(arr[i])
  }
})

return [...nonZeros, ...zeros]
}

// Solution 2

function moveZeros(arr){
  return arr.reduce( (acc, current) => {
    if(current === 0){
      acc[1].push(0)
    }else{
      acc[0].push(current)
    }
    return acc

  }, [[], []] ).flat()
}


// Solution 3

function moveZeros(arr) {
  return arr.sort((a, b) => b === 0 ? -1 : 0);
}