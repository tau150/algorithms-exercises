

// Make a function that receives 2 strings (it will always receive them), and returns if the first ends with the second. Examples:

// func("abc", "bc"); // returns true
// func("abc", "d"); // returns false

function endsWith(stringA, stringB) {
 // this is an alternative assuming endsWith is not available
  const slicedString = stringA.slice(-stringB.length)
  return slicedString === stringB

}
