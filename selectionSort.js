/**
 * LOGIC:
 * step1: Loop through each element
 * step2: Make lowest index as first element
 * step3: Compare with lowest and next element (j+1)
 *   step4: if lowest value greater then make array[j] as smaller
 *   step5: else continue;
 * step6: Once first iteration completed then
 *   step7: swap the lowest value with first variable ie; arr[i]
 * step8: Start with next value ie; (i+1) and continue the steps
 *
 */
function sortA(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
    // temp = arr[i];
    // arr[i] = arr[lowest];
    // arr[lowest] = temp;
  }
  return arr;
}

sortA([5, 3, 4, 1, 2, 6, 8, 0, 58]); // [0, 1, 2, 3, 4, 5, 6, 8, 58]
