// Given a list of elements (array), create a function that returns a new list with only the elements that appear an even number of times.

["A","B","A","C","C","C","C"] // -> ["A","C"]
[1,2,3,1,2] // -> [1,2]


function filterEvenOccurrences(arr){
  const map = {}
  const reg = new RegExp('^[0-9]+$');

  for(let el of arr){
    if(map[el]){
      map[el]++
    }else {
      map[el] = 1
    }

  }

return Object.entries(map).reduce( (acc, current) => {
 const [key, number] = current
  if(number % 2 === 0){
    const keyToAdd = reg.test(key) ? Number(key) : key
    return [...acc,   keyToAdd]
  }
  return acc
}, [])


}



module.exports = { filterEvenOccurrences };