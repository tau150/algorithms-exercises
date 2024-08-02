// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {

  return str.split(" ").map( str => {
    const arrStr = str.split("")
    arrStr[0] = arrStr[0].toUpperCase()

    return arrStr.join("")
  }).join(" ")
}

// ALTERNATIVE SOLUTIONS

// function capitalize(str) {
//   return str.split(" ").map(word => {
//     const firstLetter = word[0].toUpperCase()
//     return firstLetter + word.slice(1)
//   }).join(" ")
// }

module.exports = capitalize;
