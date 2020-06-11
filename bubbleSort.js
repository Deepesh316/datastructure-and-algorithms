/**
 * Compare each element with next element & continue
 *
 */
function sortA(arr) {
  const len = arr.length - 1;

  for (let i = 0; i <= len; i++) {
    for (let j = 0; j <= len; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// OR Better approach

function sortB(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// OR Optimized with noSwaps

function sortC(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

sortA([10, 4, 25, 1, 6, 9]);
sortB([10, 4, 25, 1, 6, 9]);
sortC([10, 4, 25, 1, 6, 9]);
