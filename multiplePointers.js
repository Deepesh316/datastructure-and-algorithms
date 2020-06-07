/**
 * create a function called sumZero which accepts sorted array
 * of integers, such that the function should find the first pair
 * that returns zero as sum.
 * Input: [-3,-2,-1,0,1,2,3]
 * Output: [-3,3] or undefined if not doesnot exist
 */

// ALGORITHM HAVING TIME COMPLEXITY O(n^2) & SPACE COMPLEXITY O(1) USING NAIVE METHOD
/**
 * step1: create a function called sumZero
 * step2: accept sorted array of integers
 * step3: compare each value in array with other values
 *   step4: if sum is zero then return the values as array
 *   step5: else return undefined
 */
function sumZeroFirstApproach(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// USING MULTIPLE POINTERS HAVING TIME COMPLEXITY O(n) & SPACE COMPLEXITY O(1)
function sumZeroSecondApproach(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === 0) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] > 0) {
      j--;
    } else {
      i++;
    }
  }
}

console.log(sumZeroFirstApproach([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroFirstApproach([1, 2, 3]));
console.log(sumZeroSecondApproach([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZeroSecondApproach([-3, -2, 0, 1, 2, 5]));
