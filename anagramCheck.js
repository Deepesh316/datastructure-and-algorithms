/**
 * Write a function which contains two strings as input
 * Determine if second string is an anagram of first
 * example:
 * input: cinema can be formed from iceman
 * output: return boolean (true/false)
 */

// ALGORITH PROBLEM SOLVING APPROACH O(N) USING FREQUENCY COUNTER PATTERN
/**
 * step1: create a function called anagramCheck
 * step2: take input as strings
 * step3: first check for string length, if not equal then return false
 * step4: create two object
 * step5: find their count and set as property in the object
 * step6: if any of key in str1 not found in str2, return false
 * step7: compare the count of keys in both str1 & str2
 */

function anagramCheckFirstApproach(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let firstString = {};
  let secondString = {};

  for (let val1 of str1) {
    firstString[val1] = (firstString[val1] || 0) + 1;
  }

  for (let val2 of str2) {
    secondString[val2] = (secondString[val2] || 0) + 1;
  }

  for (let key in firstString) {
    if (firstString[key] !== secondString[key]) {
      return false;
    }
  }

  return true;
}

console.log(anagramCheckFirstApproach("cinemano", "icemanno")); // expect true
console.log(anagramCheckFirstApproach("", "")); // expect true
console.log(anagramCheckFirstApproach("anagram", "nagaram")); // expect true
console.log(anagramCheckFirstApproach("done", "one")); // expect false
console.log(anagramCheckFirstApproach("aaz", "zza")); // expect false
