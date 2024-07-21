// Letters for numbers
// Replace the letters of a string by their index in the alphabet (e.g. A = 1 , B = 2 , C = 3 ...)

// Additional considerations:

// Ignore spaces.
// Clean up the string before starting the swap (to remove accents and special characters, it is suggested to include in this clean up process the ignoring of spaces).
// Example:

// func(“abc def”); // returns '1 2 3 3 4 5 6';

// https://github.com/goncy/interview-challenges/blob/main/ejercicios-algoritmos/sesion-1/letras-por-numeros/README.md


function deleteSpecialCharsAndSpaces(str) {
 return str.normalize('NFD').normalizedStr.replace(/[\u0300-\u036f\s]/g, '');
}

function lettersForNumbers(str){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const map = {}
  let i = 1;

  for(const letter of alphabet){
     map[letter] = i
     i++
   }

 const stringToEvaluate = deleteSpecialCharsAndSpaces(str)

 return stringToEvaluate.split("").map(letter => {
   return map[letter]
 }).join(' ')
}
