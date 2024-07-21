// Your family owns a store and have just purchased a marquee (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get more business.

// The machine works by replacing the current text with similar text, but with the first letter shifted to the end; this simulates movement.

// Your father is too busy with the business to worry about such details, so naturally he makes you responsible for creating the texts.

// Create a function called “marquee()” that accepts a text string as an argument and returns an array of text strings, where each letter of the input string is rotated to the end.

// marquee(Hola); // => [“olaH”, “laHo”, “aHol”, Hola].
// Note
// The original string must be included in the output array. The order is important. Each element of the output array must be the rotated version of the previous element.


// with recursion
function marquee(str, result = []){

  if(result.length === str.length){
    return result
  }

  const newWord = `${str.slice(1)}${str.charAt(0)}`

  result.push(newWord)

  return marquee(newWord, result)

}

function marquee(str){

  const result = []

  for(let i = 0; i < str.length; i++){
    const newWord = `${str.slice(1)}${str.charAt(0)}`
    str = newWord
    result.push(newWord)
  }


  return result
}
