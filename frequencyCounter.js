/**
 * Write a function called same, which accepts two arrays
 * It should return true, if every value in array has its
 * corresponding value squared in second array. Frequency
 * of values must be the same.
 */

/**
 * step1: Create a function called same : Approach has time complexity O(n^2)
 * step2: input - two arrays
 * step3: output: should return boolean values (true/false)
 *   step4: check for array length if not matching return false
 *   step5: loop through each value in array
 *   step6: square those values & check for arr1 square value index in arr2
 *   step7: if value is -1, return false
 *   step8: if not then splice arr2 with index of square value which found
 */

function sameFirstApproach(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

function sameSecondApproach(arr1, arr2) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2) in frequencyCounter2) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(sameFirstApproach([1, 2, 3], [4, 1, 9])); // expected output true
console.log(sameSecondApproach([1, 2, 3], [4, 1, 9])); // expected output true
console.log(sameFirstApproach([1, 4, 9, 1], [1, 1, 2, 81])); // expected output false
console.log(sameSecondApproach([1, 4, 9, 1], [1, 1, 2, 81])); // expected output false
console.log(sameFirstApproach([1, 4, 9], [16])); // expected output false
console.log(sameSecondApproach([1, 4, 9], [16])); // expected output false
