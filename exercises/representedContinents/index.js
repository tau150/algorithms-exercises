// Write a function that receives as parameter a list of developers who signed up to attend a meetup. The function must return true if there is at least one person from each continent (Africa, Americas, Asia, Europe, Oceania).

// Note: The continents will always be present and spelled correctly.

// Example:

// continentsRepresented([
//   {
//     firstName: “Fatima”,
//     lastName: “A.”,
//     country: “Algeria”,
//     continent: “Africa”,
//     age: 25,
//     language: “JavaScript”,
//   },
//   {
//     firstName: “Agustín”,
//     lastName: “M.”,
//     country: “Chile”,
//     continent: “Americas”,
//     age: 37,
//     language: “C”,
//   },
//   {
//     firstName: “Jing”,
//     lastName: “X.”,
//     country: “China”,
//     continent: “Asia”,
//     age: 39,
//     language: “Ruby”,
//   },
//   {
//     firstName: “Laia”,
//     lastName: “P.”,
//     country: “Andorra”,
//     continent: “Europe”,
//     age: 55,
//     language: “Ruby”,
//   },
//   {
//     firstName: “Oliver”,
//     lastName: “Q.”,
//     country: “Australia”,
//     continent: “Oceania”,
//     age: 65,
//     language: “PHP”,
//   },
// ]); // true


// Bonus:

// Make another function to return the number of JavaScript developers coming from Europe and write the necessary tests.
// Make another function to return the same array but with a new greeting property containing the value Hi < firstName here >, what do you like the most about < language here >? and write the necessary tests.
// Make another function that lists the represented languages, without repeating and write the necessary tests.

// https://github.com/goncy/interview-challenges/blob/main/ejercicios-algoritmos/sesion-2/continentes-representados/README.md


const people = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
];


const CONTINENTS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function onePerContinent(people){

  const representedContinents = new Set()

  for(let person of people ){
    representedContinents.add(person.continent)

    if(representedContinents.size === CONTINENTS.length){
      return true
    }
  }

  return false

 }


 function getPeopleBylanguageAndContinent(people, continent, language){
   return people.filter(per => per.continent === continent && per.language === language)

  }

 function getRepresentedLanguages(people){
   return  [...new Set(people.map(person => person.language))]
 }