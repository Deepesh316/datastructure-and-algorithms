function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

function mergeSortA(arr) {
  const len = arr.length;
  if (len <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const leftArr = mergeSortA(arr.slice(0, mid));
  const rightArr = mergeSortA(arr.slice(mid));
  return merge(leftArr, rightArr);
}

mergeSortA([1, 5, 9, 12, 2, 3, 4, 16, 6, 7, 18]);
