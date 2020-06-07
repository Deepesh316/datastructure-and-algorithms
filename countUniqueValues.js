/**
 * Create a function called countUniqueValues which accepts
 * sorted array as input and counts the unique values in the
 * array, there can be negative values in the array but sorted
 * INPUT: [1,1,1,1,2] : [] : [1,1,2,3,4,7,9,15,15]
 * OUTPUT:     2      :  0 :          7
 */

/** TIME COMPLEXITY O(n)
 * step1: create a function called countUniqueValues
 * step2: accept sorted array
 * step3: check for each value in array and push to another array if doesnot exists
 * step4: if exists do nothing
 */

function countUniqueValuesFirstApproach(arr1) {
  if (arr1.length === 0) {
    return 0;
  }

  let arr2 = [];
  for (let val of arr1) {
    if (arr2.indexOf(val) === -1) {
      arr2.push(val);
    }
  }
  return arr2.length;
}

/**
 * Using multiple pointers
 * input: [-1,-1,0,1,1,1,2,4,5,5,5,6,7]
 * output: [-1,0,1,2,4,5,6,7]
 * step1: place i & j in index 0 & 1
 * step2: check whether arr[i] & arr[j] are  equal
 * step3: if equal, then move j
 * step4: if not equal then move i & place value of j as i pointer value
 */

function countUniqueValuesSecondApproach(arr1) {
  if (arr1.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr1.length; j++) {
    if (arr1[i] !== arr1[j]) {
      i++;
      arr1[i] = arr1[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValuesFirstApproach([1, 1, 2, 3, 4, 7, 9, 15, 15]));
console.log(countUniqueValuesFirstApproach([]));
console.log(countUniqueValuesFirstApproach([-1, 0, 1, 3, 4]));
console.log(countUniqueValuesSecondApproach([-1, 0, 1, 1, 2, 4, 5, 5, 6, 7]));
