// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {

  const limit = (n * 2) -1
  let hashNumber = 1;

  for(let i = 0 ; i <= n - 1; i++){
    hashNumber = i === 0 ? hashNumber : hashNumber + 2
    const space = Math.floor((limit - hashNumber) / 2)

    console.log(new Array(Math.floor(limit)).fill(" ", 0, space).fill("#", space, space + hashNumber + space).fill(" ", space + hashNumber, limit ).join(""))
   }

}


// ALTERNATIVE SOLUTIONS

// function pyramid(n, row = 0, level = '') {
//   if (row === n) {
//     return;
//   }

//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add;
//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }
//   pyramid(n, row, level + add);
// }

module.exports = pyramid;
