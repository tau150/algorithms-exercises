// You will have a function called “sortEmotions” that will return an array of sorted emotions. It has two parameters, the first parameter called “emotions” will expect an array of emotions where an emotion will be one of the following:

// “:D” -> Super Happy
// “:)” -> Happy
// “:|” -> Normal
// “:(” -> Sad
// “T_T” -> Super Sad
// And the second parameter is called order, if this parameter is true, then the order of emotions will be descending (from Super Happy to Super Sad), if false, then it will be ascending (from Super Sad to Super Happy).

// Example if the order is true with the above arrangement:

// [“:D”, “:)”, “:|”, “:(”, “T_T”]; // => Super Happy -> Happy -> Normal -> Sad -> Sad -> Super Sad.
// If order is false:

// [“T_T”, “:(”, “:|”, “:)”, “:D”]; // => Super Sad -> Sad -> Sad -> Normal -> Happy -> Happy -> Super Happy.
// Example:

// arr = [“:D”, “:|”, “:)”, “:(”, “:D”];
// sortEmotions(arr, true); // [ “:D”, “:D”, “:)”, “:|”, “:(” ]
// sortEmotions(arr, false); // [ “:(”, “:|”, “:)”, “:D”, “:D”, “:D” ]
// Notes
// The array could be empty, in that case return the same empty array ¯*(( ツ )*/¯
// All emotions will be valid

// https://github.com/goncy/interview-challenges/tree/main/ejercicios-algoritmos/sesion-3/ordenar-emociones


const rating = {
  T_T: 1,
  ":(": 2,
  ":|": 3,
  ":)": 4,
  ":D": 5,
}

function sortEmotions(emotions, order){

  if(emotions.length === 0){
    return emotions
  }

  return emotions.sort( (a, b) => {
    if(order){
      return rating[b] - rating[a]
    }else {
      return rating[a] - rating[b]
    }
  })
}
