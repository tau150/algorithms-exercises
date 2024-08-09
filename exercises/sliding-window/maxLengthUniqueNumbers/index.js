// SLIDING WINDOW

// Input
// const arr = [1, 2, 1, 2, 3];
// const k = 2;

// Given an array of integers and a number k, find the length of the longest substring containing exactly k distinct numbers.


const maxLengthUniqueNumbers = (arr, k) => {
  maxLength = 0;
  const start = 0;
  const seen = new Set()


  for(let end = 0; i < arr.length; end ++){
    const currentChar = arr[end]

    while (charSet.has(currentChar)) {
      charSet.delete(s[start]);
      start++;
    }
    seen.add(currentChar);

  }
}