// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

  const map = {}

  for(let letter of str.split(" ").join("")){
    if(map[letter]){
      map[letter] = map[letter] + 1
    }else{
      map[letter] = 1
    }
  }

  const maxValue = Math.max(...Object.values(map))
  return Object.keys(map).find(el => map[el] === maxValue)

}


// ALTERNATIVE SOLUTIONS


function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}


module.exports = maxChar;
