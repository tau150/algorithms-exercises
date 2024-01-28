// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for(let i = 0 ; i <= n - 1; i++){
   console.log(new Array(n).fill("#", 0, i + 1).fill(" ",i + 1).join(""))
  }
}

/// ALTERNATIVE SOLUTIONS

// function steps(n) {
//   for(let i = 1; i <= n; i++){
//     const line = Array.from({length: n}, (_, index) => index < i ? "#" : " ");
//     console.log(line.join(""))
//   }
// }

// recursive
// function steps(n, row = 0, stair = '') {
//   if(n === row){
//     return
//   }

//   if(n === stair.length){
//     console.log(stair)
//     return steps(n, row + 1)
//   }

//   if(stair.length <= row){
//     stair += '#'
//   }else{
//     stair += " "
//   }

//   steps(n, row, stair)
// }

module.exports = steps;
