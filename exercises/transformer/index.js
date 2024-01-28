// Make a function that receives a 'data' object and transforms it into the output structure.

// const data = {
//   nombres: [STRING],
//   edades: [INT],
// }
// const output = [
//   { id: [STRING], nombre: [STRING], edad: [INT] },
//   ...
// ]

// example:

// func({ nombres: ["Bruno", "Andrea"], edades: [20, 19] });

// returns:

// [
//   { id: "1", nombre: "Bruno", edad: 20 },
//   { id: "2", nombre: "Andrea", edad: 19 },
// ];

function transformData(data){
  return data.nombres.map( (name, i) => {
    return {
      id: String(i + 1),
      nombre: name,
      edad: data.edades[i]
    }
  })
}

module.exports = transformData;