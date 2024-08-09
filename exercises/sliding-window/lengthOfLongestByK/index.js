// Given a string, find the length of the longest sub string that contains no more than k distinct characters

// acccpbbebi, k = 3  -> the answer is 6 -> the longest with no more than 3 distinct characters is the substring cccpbb


const lengthOfLongestByK = (s, k) => {
  let start = 0;
  longestSubstr = 0;
  letterFrequencies = {}

  for(let end = 0; end < s.length; end++){
    const character = s[end]
    letterFrequencies[character] = (letterFrequencies[character] ?? 0 ) + 1

    while(Object.keys(letterFrequencies).length >= k){
      const startCharacter = s[start]
      letterFrequencies[startCharacter]--
      if( letterFrequencies[startCharacter] === 0){
        delete letterFrequencies[startCharacter]
      }
      start++
    }

    longestSubstr = Math.max(longestSubstr, end - start + 1)

  }

  return longestSubstr
}