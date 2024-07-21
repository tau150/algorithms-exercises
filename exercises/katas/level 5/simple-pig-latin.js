// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


function pigIt(word){

  return word.split(' ').map(word => {
    if(/[A-Za-z0-9]/.test(word)){
      return`${word.slice(1)}${word[0]}ay`
    }
    return word

  }).join(" ")
}



