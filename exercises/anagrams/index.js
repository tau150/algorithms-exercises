// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


const parseStringToCompare = (string) => {
  return string.toLowerCase().replace(/[^a-z]/g, '');
}

function anagrams(stringA, stringB) {

  const parsedStringA = parseStringToCompare(stringA)
  const parsedStringB = parseStringToCompare(stringB)

  const mapA = {}

  const mapB = {}


  if(parsedStringA.length !== parsedStringB.length){
    return false
  }

  for(let i = 0 ; i < parsedStringA.length; i ++) {
    const charA = parsedStringA[i]
    const charB = parsedStringB[i]

    mapA[charA] = mapA[charA] ?  mapA[charA] + 1 : 1
    mapB[charB] = mapB[charB] ?  mapB[charB] + 1 : 1

  }

  return Object.entries(mapA).every( el => el[1] === mapB[el[0]])
}



// ALTERNATIVE SOLUTIONS


// function anagrams(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//   return str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
// }

module.exports = anagrams;
