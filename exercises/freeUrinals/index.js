// Free Urinals
// In men's restrooms there is an unbreakable rule which is to leave a free urinal between you and the person next to you.
// For example, if there are 3 urinals and a person is in the urinal on the left, you have to go immediately to the urinal on the right.
// With this we can say that a maximum of 3 people can urinate if there are 5 urinals and only 2 if there are 4.

// Your task: Write a function that returns the maximum number of free urinals (an integer) following the rule we mentioned.

// Input: A string containing 1s and 0s (For example: 10001) (1 <= Urinals <= 20) The 1s means that the urinal is occupied and 0 is free.

// Note: If there is an error in the string, for example: 011, return -1.

// "10001" => 1 (10101)
// "1001" => 0 (1001)
// "00000" => 3 (10101)
// "000" => 2 (101)
// "01000" => 1 (01010 o 01001)


function freeUrinals(urinals){

  let result = 0
  const arrayUrinals = urinals.split("")

  arrayUrinals.forEach((el, i) => {
   const isZero = el === '0';

   if(isZero && !Number(arrayUrinals[i+1]) && !Number(arrayUrinals[i-1])){
    arrayUrinals[i] = '1'
    result +=1
   }

  })

  return result

  }


  // with reducer
function freeUrinals(urinals){
  return urinals.split("").reduce((counter, el, i, arrayUrinals) =>{
    const isZero = el === '0';

    if(isZero && !Number(arrayUrinals[i+1]) && !Number(arrayUrinals[i-1])){
    arrayUrinals[i] = '1'
    counter +=1
   }

   return counter
  }, 0)

  }