/**
 * Write a function called maxSubArraySum which accepts array of integers
 * and number called n. Function should calculate the maximum sum of n
 * consecutive elements in an array.
 * INPUT: ([1,2,5,2,8,1,5],2) where 2 is n here
 * OUTPUT: 2+8 = 10
 */

// NAIVE APPROACH WITH TIME COMPLEXITY O(n^2)
/**
 * step1: create a function maxSubArraySum
 * step2: loop through each element & find the sum of consecutive digits (n)
 * step3: store sum to maxValue
 * step4: move array value one by one and compare with maxValue
 * step5: if sum is greater than maxVal set maxVal with current sum
 */
function maxSubArraySumFirstApproach(arr1, n) {
  let maxVal = -Infinity;
  for (let i = 0; i < arr1.length - n + 1; i++) {
    let temp = 0;
    for (let j = 0; j < n; j++) {
      temp = temp + arr1[i + j];
    }
    if (temp > maxVal) {
      maxVal = temp;
    }
  }
  return maxVal;
}

console.log(maxSubArraySumFirstApproach([1, 2, 5, 2, 8, 1, 5], 2));
