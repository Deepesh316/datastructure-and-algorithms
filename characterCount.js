/**
 * Function that takes a string and print
 * the count of each character in the string
 */

// Example
// input: i fell In Love with Javascript
// output: { f: 1, e: 2, l: 3, n: 1, o: 1, v: 2, w: 1, t: 2, h: 1, j: 1, a: 2, s: 1, c: 1, r: 1, p: 1 }

/**
 * step1: create an object
 * step2: loop through string
 * step3: check for existence of character(letter/number) in object
 *   step4: if yes then increment value with 1
 *   step5: else set value to 1 with character as key
 * step6: if any other character except letter/number ignore.
 * step7: return the object
 */

function characterCountFirstApproach(str) {
  let obj = {};
  str = str.split(" ").join("").toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str.charAt(i))) {
      obj[str.charAt(i)] += 1;
    } else {
      obj[str.charAt(i)] = 1;
    }
  }
  return obj;
}

/**
 * Simpler way using regex & conditional operator
 * @param {*} str
 */
function characterCountSecondApproach(str) {
  let obj = {};
  const charRegex = /^[a-z0-9]$/;
  for (let char of str) {
    if (charRegex.test(char)) {
      obj[char] = obj[char] ? ++obj[char] : 1;
    }
  }
  return obj;
}

console.log(characterCountFirstApproach("i fell In Love with Javascript"));
console.log(characterCountSecondApproach("Hello Deepesh how are yOu"));
