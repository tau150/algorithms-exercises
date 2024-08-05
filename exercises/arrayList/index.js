// Implement Array List with objects

// length - integer - How many elements in the array
// push - function - accepts a value and adds to the end of the list
// pop - function - removes last element from list and returns it
// get - function - accepts an index and returns the value at that position
// delete - function - accepts an index, removes value from list, collapses, and returns removed value


class ArrayList {
  constructor(){
   this.length = 0;
   this.data = {}
  }

  push(value){

    this.data[this.length] = value;
    this.length++
  }
  pop(){
    const lastItem = this.data[this.length - 1]

    delete this.data[this.length - 1]

    this.length--

    return lastItem
  }
  get(index){

    return this.data[index]
  }
  delete(index){

    const removedValue = this.data[index]
     for(let i = index; i < this.length; i++){
      this.data[i] = this.data[i+1]
    }

    delete this.data[this.length - 1]
    this.length--

    return removedValue

  }

}