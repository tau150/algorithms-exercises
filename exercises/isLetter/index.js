// We are trying to teach some JavaScript developers that '1' and 1 are not really the same thing.
// For that we need you to implement a function that receives a string and returns a boolean indicating whether the string is a letter or not.

// isALetter(“a”); // true
// isALetter(“1”); // false

// https://github.com/goncy/interview-challenges/tree/main/ejercicios-algoritmos

function isALetter(str) {
  return /^[a-zA-Z]$/.test(str)
}