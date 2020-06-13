function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = findPivot(arr, left, right);
    quickSort(arr, left, pivot - 1); // left of pivot
    quickSort(arr, pivot + 1, right); // right of pivot
  }
  return arr;
}

function findPivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  let temp;
  let pivot = arr[startIndex];
  let swpIdx = startIndex;
  for (let i = startIndex + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swpIdx++;
      temp = arr[i];
      arr[i] = arr[swpIdx];
      arr[swpIdx] = temp;
    }
  }
  temp = arr[swpIdx];
  arr[swpIdx] = arr[startIndex];
  arr[startIndex] = temp;

  return swpIdx;
}

quickSort([5, 2, 1, 3, 8, 4, 7, 6, 9, 12]);
