// Ditto is a Pokémon that can transform into almost any other Pokémon.
// In the laboratory they are isolated to avoid confusing them with others and to treat them properly.
// But one Ditto escaped, we know that this particular Ditto always turns into the Pokémon next to it, so we decided to line them up.
// We know that the Ditto is going to have the same Pokémon in front and behind it.

// Implement a function that receives a list of Pokémon and returns the index of Ditto in that list.

// There will never be more than 3 of the same Pokémon together nor less than 3 Pokémon total.

// https://github.com/goncy/interview-challenges/tree/main/ejercicios-algoritmos/sesion-5/escondiditto

const pokemons = ['abra', 'pikachu', 'psyduck', 'psyduck', 'blastoise', 'blastoise', 'blastoise', 'charmander', 'pikachu', 'pikachu', 'pikachu', 'psyduck', 'blastoise']

function findPokemon(pokemons){
  return pokemons.findIndex((pokemon, i, array) => array[i-1] === pokemon && pokemon === array[i+1])
}

findPokemon(pokemons)