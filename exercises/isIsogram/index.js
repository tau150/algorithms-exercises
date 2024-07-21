// An isogram is a word that has no repeated letters. Additional Considerations:

// An empty string is an isogram.
// The function must be case insensitive and ignore accents.
// If the string has more than one word return false.
// The string must be cleaned up before comparing.
// Example:

// func(“Bat”); // returns true
// func(“challenge”); // returns false
// func(“House”); // returns false
// func(“PeRrO”); // returns false
// func(“GaTo”); // returns true

// https://github.com/goncy/interview-challenges/blob/main/ejercicios-algoritmos/sesion-1/isograma/README.md


function isIsogram(str){

  const normalizedText = str.toLowerCase().normalize('NFD').replace(/[^a-z]/g, '');

  return new Set([...normalizedText]).size === normalizedText.length

}


module.exports = isIsogram;
