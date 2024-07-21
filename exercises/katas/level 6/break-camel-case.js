

// Complete the solution that the function will break up camel casing, using a space between words.

// "camelCasing" => camel Casing


function breakCamelCase(str){
   return str.replace(/[A-Z]/g, (match => ` ${match}`))

   // better solution
  // $1 refers to the capture group of the regex, the capture group give it the use of the parentheses
  //  return(string.replace(/([A-Z])/g, ' $1'));
}