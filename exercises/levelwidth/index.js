// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const POINTER = 'S'
  const counters = [0];
  const arrayOfEl = [root, POINTER]

    while(arrayOfEl.length > 1){
    const node = arrayOfEl.shift()
    if(node === POINTER){
      arrayOfEl.push(POINTER)
      counters.push(0)
    }
    if(node.children){
      arrayOfEl.push(...node.children)
      counters[counters.length - 1]++;
    }
  }

  return counters

}

module.exports = levelWidth;
