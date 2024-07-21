// Write a function that takes a string of one or more words and returns the same string, but with all words of five or more letters inverted (such as the name of this Kata). The passed strings will only consist of letters and spaces. Spaces will only be included when more than one word is present.

// Examples
// turn("Hola como estás"); // => "Hola como sátes"
// turn("Esto es una prueba"); // => "Esto es una abeurp"

// https://github.com/goncy/interview-challenges/blob/main/ejercicios-algoritmos/sesion-3/gira-sarbalap/README.md


function turn(str){
  return str.split(" ").map( word => word.length > 4 ? word.split("").reverse().join("") : word).join(" ")
}