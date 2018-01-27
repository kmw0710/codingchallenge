/**
 * @param {number} x
 * @return {boolean}
 */

//Determine whether an integer is a palindrome

var isPalindrome = function(x) {
  let string = JSON.stringify(x);
  return string.split('').reverse().join('') === string ? true : false;
};

console.log(isPalindrome(15351, true);
console.log(isPalindrome(14261, false;
