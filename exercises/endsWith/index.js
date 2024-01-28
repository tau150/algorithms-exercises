// Make a function that receives 2 strings (it will always receive them), and returns if the first one ends with the second one. Examples:


// func("abc", "bc"); // returns true
// func("abc", "d"); // returns false


function endsWith(string1, string2) {
  return string1.slice(string2.length * - 1) === string2
}



module.exports = endsWith;