/**
 * step 1 : start by picking second element in the array
 * step 2: compare the second element with one before it and swap if necessary.
 * step 3: continue to the next element, if it is in the incorrect order, iterate
 *         through sorted portion (ie; the left side) to place element in correct place.
 * step 4: Repeat until the array is sorted
 */
function insertionSort(arr) {
  let j;
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4, 5]);
