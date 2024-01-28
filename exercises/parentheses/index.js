// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(parens){
  const support = []
  const CLOSE = ")"
  const OPEN = "("

for(let i = 0; i< parens.length; i++){
  if(parens[i] === OPEN){
    support.push(parens[i])
  }

  if(parens[i] === CLOSE){
   if(support.length > 0){
    support.pop()
   }else{
    return false;
   }
  }
}

return support.length === 0
}

// ALTERNATIVE SOLUTIONS

// function validParentheses(parens){
// const buffer = parens.replace(/\(\)/, "")

// if(buffer === ""){
//   return true
// }else if (buffer === parens){
//   return false
// }

// return validParentheses(buffer)
// }



module.exports = validParentheses;
