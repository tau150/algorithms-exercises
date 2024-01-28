// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

  constructor(){
    this.data = new Stack()
    this.support = new Stack()
  }

 add(value){
    this.data.push(value)
  }

 peek(){
  this.__fillSupport()
  const record = this.support.peek()
  this.__fillData()
  return record
 }

 remove(){
  this.__fillSupport()
  const record = this.support.pop()
  this.__fillData()
  return record
 }


 __fillSupport(){
    while(this.data.peek()){
      const record = this.data.pop()
      this.support.push(record)
    }
 }

 __fillData(){
    while(this.support.peek()){
      const record = this.support.pop()
      this.data.push(record)
    }
 }
}

module.exports = Queue;
