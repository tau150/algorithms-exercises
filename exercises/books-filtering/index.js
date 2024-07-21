// Ejercicio 1: Remover Duplicados
// Dado un array de estudiantes, donde cada estudiante es un objeto con una propiedad name y un array books que contiene los títulos de los libros que han reservado,
// escribe una función para eliminar los estudiantes duplicados del array.


const students = [
  { name: 'Alice', books: ['Book A', 'Book B'] },
  { name: 'Bob', books: ['Book C'] },
  { name: 'Alice', books: ['Book A', 'Book B'] },
  { name: 'Charlie', books: ['Book D'] },
];


function removeDuplicates(students){

  const seenStudents = new Set()

  return students.reduce((acc, student) => {
    const isAlreadySeen = seenStudents.has(student.name)

    if(!isAlreadySeen){
      seenStudents.add(student.name)
      acc.push(student)
    }


    return acc

  }, [])

}


// Ejercicio 2: Remover Duplicados y acumular sus libros

const students2 = [
  { name: 'Alice', books: ['Book A', 'Book B'] },
  { name: 'Bob', books: ['Book C'] },
  { name: 'Alice', books: ['Book D', 'Book F'] },
  { name: 'Alice', books: ['Book D', 'Book H'] },
  { name: 'Charlie', books: ['Book D'] },
];

function removeDuplicatesWithBooksAcc(students){

  const seenStudents = new Set()
  const seenStudentsBooks = {}

  return students.reduce((acc, student) => {
    const isAlreadySeen = seenStudents.has(student.name)

    if(!isAlreadySeen){
      seenStudents.add(student.name)
      seenStudentsBooks[student.name] = new Set(student.books)
      acc.push(student)
    }else{
      student.books.forEach(book => seenStudentsBooks[student.name].add(book));
      const existingStudent = acc.find(st => st.name === student.name);
      existingStudent.books = [...seenStudentsBooks[student.name]];
    }

      return acc;

  }, [])

}


// Ejercicio 3: Asignar libros a estudiantes

// Dado un array de estudiantes y un array de libros, escribe una función que asigne los libros reservados a los objetos de libros correspondientes para cada estudiante.

const students3 = [
  { name: 'Alice', books: ['Book A', 'Book B'] },
  { name: 'Bob', books: ['Book C'] },
  { name: 'Charlie', books: ['Book D'] }
];

const books = [
  { title: 'Book A', author: 'Author A' },
  { title: 'Book B', author: 'Author B' },
  { title: 'Book C', author: 'Author C' },
  { title: 'Book D', author: 'Author D' }
];


//Respuesta esperada

// [
//   { name: 'Alice', books: [{ title: 'Book A', author: 'Author A' }, { title: 'Book B', author: 'Author B' }] },
//   { name: 'Bob', books: [{ title: 'Book C', author: 'Author C' }] },
//   { name: 'Charlie', books: [{ title: 'Book D', author: 'Author D' }] }
// ]

function assignBooks(students, books){

  return students.map( student => {

    const booksToAssign = student.books.map( book => {
      return books.find(el => el.title === book)
    })

    return {...student, books: booksToAssign}

  })


}

assignBooks(students, books)

// Una solución más eficiente es crear un mapa de books al principio para no tener que hacer un find cada vez

function assignBooks(students, books) {
  const bookMap = books.reduce((acc, book) => {
    acc[book.title] = book;
    return acc;
  }, {});

  return students.map(student => {
    const booksToAssign = student.books.map(book => bookMap[book]);
    return { ...student, books: booksToAssign };
  });
}
