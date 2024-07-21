// Someone was hacking the grades. Each student's grade history is presented as an array of arrays. The first element of each array is the student's name, the second is the score the third is an array of their grades.

// const students = [
//   [“goncy”, 445, [“B”, “A”, “A”, “C”, “A”, “A”]],
//   [“mati”, 140, [“B”, “A”, “A”, “A”, “A”]]],
//   [“caro”, 200, [“B”, “A”, “A”, “A”, “C”]]]
// ];
// Each rating corresponds to a score:

// A: 30 points
// B: 20 points
// C: 10 points
// D: 5 points
// All the rest: 0 points
// If there are at least 5 grades and all of them are B or higher, 20 extra points are added to the score. After all calculations the score should be limited to a maximum of 200.

// Return a list of the names of the hackers.

// const students = [
//   [“goncy”, 445, [“B”, “A”, “A”, “C”, “A”, “A”]],
//   [“mati”, 140, [“B”, “A”, “A”, “A”, “A”]]],
//   [“caro”, 200, [“B”, “A”, “A”, “A”, “C”]]]
// ];

// // => [“goncy”, “caro”]]

const points = {
  A: 30,
  B: 20,
  C: 10,
  D: 5,
}

// with reduce
function findTheHacker(students){

  return students.reduce((acc, [name, studentPoints, notes]) => {

    if(studentPoints > 200){
     acc.push(name)
     return acc
    }


    let realPoints = notes.reduce( (totalPoints, note) => {
      return totalPoints += points[note] || 0
    }, 0)

    if(notes.length >= 5 && notes.every(note => note === 'A' || note === 'B')){
      realPoints += 20
    }

    if(studentPoints > realPoints){
      acc.push(name)
    }
    return acc

  }, [])

}



// with for
function findTheHacker(students){
  const hackers = []

  for(let [name, studentPoints, notes] of students) {

    if(studentPoints > 200){
      hackers.push(name)
      continue;
    }


    let realPoints = notes.reduce((totalPoints, note) => {
      return totalPoints += points[note] || 0
    }, 0)

    if(notes.length >= 5 && notes.every(note => note === 'A' || note === 'B')){
      realPoints += 20
    }


    if(studentPoints > realPoints){
       hackers.push(name)
     }

  }

  return hackers

}

