// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.



// using Node
class Node {
  constructor(data){
    this.data = data;
    this.right = null;
    this.left = null;
  }

  insert(data){
    if(data < this.data && this.left){
      this.left.insert(data)
    }else if(data < this.data){
      this.left = new Node(data)
    }else if(data > this.data && this.right){
      this.right.insert(data)
    }else if(data > this.data){
      this.right = new Node(data)
    }
  }

  contains(data){

    if(this.data === data) {
      return this
    }
    if(data < this.data && this.left){
      return this.left.contains(data)
    } else if(data > this.data && this.right){
      return this.right.contains(data)
    }

    return null

  }

}


// using Tree

class Tree {

  constructor(){
    this.root = null;
  }

  add(data){

    if(this.root === null) {
      this.root = new Node(data)
    }else{
      let current = this.root

      while(true){
        if(current.data > data){
          if(current.left){
            current = current.left
          } else {
            current.left = new Node(data)
            break;
          }
        } else {
          if(current.right){
            current = current.right
          } else {
            current.right = new Node(data)
            break;
          }
        }
      }
    }

    return this
  }

}

module.exports = Node;
