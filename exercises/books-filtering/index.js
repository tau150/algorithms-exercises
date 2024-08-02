
// Exercise 1: Duplicate Remover
//Given an array of students, where each student is an object with a name property and an array books containing the titles of the books they have reserved,
//write a function to remove duplicate students from the array.


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


function removeDuplicates(students) {
  return students.filter((student, index, self) => {
    return self.findIndex(s => s.name === student.name) === index;
  });
}


// Exercise 2: Remove Duplicates and accumulate your books
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

// Exercise 3: Assign books to students
// Given an array of students and an array of books, write a function that maps the reserved books to the corresponding book objects for each student.

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


//expected response

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

// A more efficient solution is to create a books map at the beginning so you don't have to do a find every time
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
