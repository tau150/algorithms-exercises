// A senior center held a vote to see which game they should play next week.
// Since there are many retirees at the center, they opened several voting tables so that they could vote.
// The problem is that some retirees forgot whether they had already voted or not and voted several times at different tables.

// Luckily, at the time of voting different data is requested, such as the id.
// Therefore we must implement a function that iterates all the tables and returns a single list with a single vote per participant.

// Our function in addition to the tables must receive the parameter by which we must do the join

// Input
// unificarVotos(
//   [
//     [{id: "123456", nombre: 'Gaspar', voto: 'Bingo'}, {id: "234123", nombre: 'Clelia', voto: 'Sudoku'}],
//     [{id: "123456", nombre: 'Gaspar', voto: 'Bingo'}],
//     [{id: "643723", nombre: 'Pedro', voto: 'Sudoku'}]
//   ],
//   "id"
// )

// // Output
// [
//   {id: "123456", nombre: 'Gaspar', voto: 'Bingo'},
//   {id: "234123", nombre: 'Clelia', voto: 'Sudoku'},
//   {id: "643723", nombre: 'Pedro', voto: 'Sudoku'}
// ]


const votes = [
  [{id: "123456", nombre: 'Gaspar', voto: 'Bingo'}, {id: "234123", nombre: 'Clelia', voto: 'Sudoku'}],
  [{id: "123456", nombre: 'Gaspar', voto: 'Bingo'}],
  [{id: "643723", nombre: 'Pedro', voto: 'Sudoku'}]
]

function unifyVotes(votes){

const map = new Map()

return votes.flat().reduce((acc, vote) => {

if(!map.has(vote.id)){
map.set(vote.id, vote)

return [...acc, {...vote}]

}
return acc

}, [])

}


unifyVotes(votes)


// other alternative

function unifyVotes(votes){
 const result = []
 const seenElements = new Set()

 votes.flat().forEach(vote => {
  if(!seenElements.has(vote.id)){
    seenElements.add(vote.id)
    result.push(vote)
  }
 })

 return result

}


  unifyVotes(votes)