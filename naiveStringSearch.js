/**
 *  Write a function called naiveSearch which accepts string
 *  and substring. Function should return the count of substring
 *  inside the string passed.
 *
 */
function naiveSearch(str, key) {
  const strLen = str.length - 1;
  const keyLen = key.length - 1;
  let count = 0;
  for (let i = 0; i <= strLen; i++) {
    for (let j = 0; j <= keyLen; j++) {
      if (str[i + j] !== key[j]) {
        break;
      }
      if (j === keyLen) count++;
    }
  }
  return count;
}

naiveSearch("lorie loled", "lol");
