// write a function that takes a string of parentheses and determines if the order of the parentheses is valid. The function should return true if the string is valid and false if not

// '()' => true
// ')(()))' => false
// '(' => false
// '(())((()())())' => true

function validParentheses(parens){
  const stack = [];

  for(let i = 0; i < parens.length; i++){

    if(parens[i] === '('){
     stack.push('(')
    }

    if(parens[i] === ')'){

    if(stack.length === 0){
      return false
     }

     stack.pop()
    }
  }

  return stack.length === 0
}