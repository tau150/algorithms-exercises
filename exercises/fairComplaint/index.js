// Fair complaint

// There is a commotion at the school gate, a group of protesters say that the disparity of letters in the words used
// in the textbooks is very marked. After counting you realize that they are right.
// Now you have to create a function that given a word, tells if the number of letters in it have the same number of occurrences.

// fairComplaint("abcabc"); // true
// fairComplaint("palangana"); // false


// https://github.com/goncy/interview-challenges/tree/main/ejercicios-algoritmos

function fairComplaint(word) {

  const cache = {}

  for(let letter of word){
    cache[letter] = (cache[letter] ?? 0) + 1;
  }

  return new Set(Object.values(cache)).size === 1
}