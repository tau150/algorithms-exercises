// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){

  if(!text){
    return 0
  }

  const map = {}

 for(let char of text.toLowerCase()){
   if(map[char]){
     map[char] = map[char] + 1
   }else{
      map[char] = 1
   }
 }

  return Object.values(map).filter(val => val > 1).length
}


// Alternative

function duplicateCount(text){

  const lowercaseText = text.toLowerCase()

   const result = lowercaseText.split("").filter(le =>{
    return lowercaseText.indexOf(le) !== lowercaseText.lastIndexOf(le)
  })

   return new Set(result).size
}
