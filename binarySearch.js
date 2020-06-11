/**
 * write a function called binarySearch
 * step 1: set left, right and pivot pointer
 * step 2: check if value is pivot then return indexOf pivot
 * step 3: If value is less than pivot
 *   step 4: right will be pivot - 1
 *   step 5: pivot will be indexOf left + indexOf right
 *
 */

function binarySearch(arr, val) {
  let left = arr[0];
  let right = arr.length - 1;
  let pivot = Math.floor((left + right) / 2);

  while (arr[pivot] !== val && left < right) {
    if (val < arr[pivot]) right = pivot - 1;
    else left = pivot + 1;
    pivot = Math.floor((left + right) / 2);
  }

  return arr[pivot] === val ? pivot : -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7], 3);
