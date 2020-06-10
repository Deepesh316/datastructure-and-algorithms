function linearSearch(arr, val) {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([1, 2, 6, 9, 6], 6); // 2
linearSearch([100], 6); // -1
linearSearch([100], 100); // 0
