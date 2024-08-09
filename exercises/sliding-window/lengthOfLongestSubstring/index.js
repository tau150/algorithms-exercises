// SLIDING WINDOW

// Input
const str = "abcabcbb";

// Output
// the longest substring with more unique characters is 3. "abc"


const lengthOfLongestSubstring = (s) => {
  let charSet = new Set();
  let maxLength = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end]

    while (charSet.has(currentChar)) {
      charSet.delete(s[start]);
      start++;
    }

    charSet.add(currentChar);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
