function getAnagrams (string, anagram = '', result = []) {
  if (!string) {
    result.push(anagram);
    return;
  }
  for (let i = 0; i < string.length; i++) {
    anagram += string[i];
    getAnagrams(string.slice(0, i) + string.slice(i + 1), anagram, result);
    anagram = anagram.slice(0, anagram.length - 1);
  }
  return result;
}

getAnagrams('abc');
//[ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
