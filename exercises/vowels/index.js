// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


function vowels(str) {

  const regex =  new RegExp(/^[aeiou]$/i)
  let counter = 0;

  for(let letter of str){
    if(regex.test(letter))
      counter ++
    }

  return counter
}


// ALTERNATIVE SOLUTIONS

// function vowels(str) {
//   const regex = /[aeiou]/i
//    return str.split("").reduce( (acc, current) => {
//    return regex.test(current) ? acc += 1 : acc
// }, 0)
// }

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }



module.exports = vowels;
