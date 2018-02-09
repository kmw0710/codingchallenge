/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 
//Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

var strStr = function(haystack, needle) {
    return haystack.includes(needle) ? haystack.indexOf(needle) : -1
};

//haystack = 'hello', needle = 'll';
//haystack = 'aaaaa', needle = 'bba';
