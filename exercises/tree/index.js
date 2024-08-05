// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {

  constructor(data){
    this.data = data
    this.children = []
  }

  add(data){
    this.children.push(new Node(data))
  }

  remove(data){
  this.children = this.children.filter( el => el.data !== data)
  }

}

class Tree {

  constructor(){
    this.root = null;
  }

  traverseBF(fn){
    let arrayOfNodes = [this.root]

    while(arrayOfNodes.length){
      const firstElement = arrayOfNodes.shift();
      arrayOfNodes.push(...firstElement.children)
      fn(firstElement)
    }
  }

  traverseDF(fn){
    let arrayOfNodes = [this.root]

    while(arrayOfNodes.length){
      const firstElement = arrayOfNodes.shift();
      arrayOfNodes.unshift(...firstElement.children)
      fn(firstElement)
    }
  }



}

module.exports = { Tree, Node };


// DEPTH FIRST TRAVERSAL

//        8
//     3     10
//   1  6       14
//     4  7   13
//

// preorder
// [8, 3, 1, 6, 4, 7, 10, 14, 13]

// inorder
// [1, 3, 4, 6, 7, 8, 10, 13, 14]

// postorder
// [1, 4, 7, 6, 3, 13, 14, 10, 8]

// other implementation for return the nodes in preorderTraverse with recursion
// this start at the root, go all the way down to the right first and then all the way down to the left
// at the beginning the node is a object like a tree, with a value and a left and right node. And the array is an empty array
const preorderTraverse = (node, array) => {
  if(!node){
    return array;
  }

  array.push(node.value)

  array = preorderTraverse(node.left, array)
  array = preorderTraverse(node.right, array)

  return array;
}


const inorderTraverse = (node, array) => {
  if(!node){
    return array;
  }

  array = inorderTraverse(node.right, array)
  array.push(node.value)
  array = inorderTraverse(node.left, array)

  return array;
}


const portorderTraverse = (node, array) => {
  if(!node){
    return array;
  }

  array = portorderTraverse(node.left, array)
  array = portorderTraverse(node.right, array)
  array.push(node.value)

  return array;
}


// BREADTH FIRST TRAVERSAL
const breadthFirstTraversal = (queue, array) => {

  while(queue.length){
   const node = queue.shift()

   array.push(node.value)

   if(node.left){
    queue.push(node.left)
  }
  if(node.right){
    queue.push(node.right)
    }
  }

  return result;
}


const breadthFirstTraversalRecursive = (queue, array) => {
  if(!queue.length){
    return array
  }

  const node = queue.shift()
  array.push(node.value)
  if(node.left){
    queue.push(node.left)
  }
  if(node.right){
    queue.push(node.right)
  }

  return breadthFirstTraversalRecursive(queue, array)

}