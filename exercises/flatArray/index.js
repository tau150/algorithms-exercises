
// Without using .flat(), create a function to flatten an array.

// const example = [1,2, [3, 4, [ 5, 6, 7], 8], 9, 10]
// flatten(example); // [1,2,3,4,5,6,7,8,9,10]

function flatten(arr){
  return arr.reduce( (acc, current) => {
    if(Array.isArray(current)){
      return [...acc, ...flatten(current)]
    }
     return [...acc, current]
   }, [])
}
