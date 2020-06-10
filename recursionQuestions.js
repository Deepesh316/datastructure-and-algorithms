/**
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow()
 */

function power(base, exp) {
  // base case
  if (exp === 0) return 1;

  return base * power(base, exp - 1);
}

power(2, 0); // 1
power(2, 2); // 4
power(2, 4); // 16

/**
 * Write a function factorial which accepts a number and returns the factorial of that number.
 * A factorial is the product of an integer and all the integers below it;
 * e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24.
 * factorial zero (0!) is always 1.
 */

function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

factorial(1); // 1
factorial(2); // 2
factorial(4); // 24
factorial(7); // 5040

/**
 * Write a function called productOfArray
 * which takes in an array of numbers and returns the product of them all.
 */

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.splice(1));
}

productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60

/**
 * Write a function calledrecursiveRange which accepts a number and
 * adds up all the numbers from 0 to the number passed to the function
 */

function recursiveRange(range) {
  if (range === 0) return 0;
  return range + recursiveRange(range - 1);
}

recursiveRange(6); // 21
recursiveRange(10); // 55

/**
 * Write a recursive function called fib which accepts a number and
 * returns the nth number in the Fibonacci sequence.
 * Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ...
 * which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */

function fib(num) {
  if (num === 1 || num === 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

fib(4); // 3
fib(10); // 55
fib(28); // 317811
fib(35); // 9227465

/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */

function reverse(str) {
  if (str.length <= 1) return str;
  const fc = str.charAt(0);
  return reverse(str.slice(1)) + fc;
}

reverse("awesome"); // 'emosewa'
reverse("rithmschool"); // 'loohcsmhtir'

/**
 * Write a recursive function called isPalindrome which returns true
 * if the string passed to it is a palindrome (reads the same forward and backward).
 * Otherwise it returns false.
 */

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

isPalindrome("awesome"); // false
isPalindrome("foobar"); // false
isPalindrome("tacocat"); // true
isPalindrome("amanaplanacanalpanama"); // true
isPalindrome("amanaplanacanalpandemonium"); // false

/**
 * Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise it returns false.
 */

function someRecursive(arr, cb) {
  // base case
  if (arr.length === 0) return false;

  const isGood = cb(arr[0]);
  if (isGood) return true;
  return someRecursive(arr.slice(1), cb);
}

const isOdd = (val) => val % 2 !== 0;

someRecursive([1, 2, 3, 4], isOdd); // true
someRecursive([4, 6, 8, 9], isOdd); // true
someRecursive([4, 6, 8], isOdd); // false
someRecursive([4, 6, 8], (val) => val > 10); // false

/**
 * Write a recursive function called flatten which accepts an array of arrays and
 * returns a new array with all values flattened.
 */

function flatten(arr) {
  if (!Array.isArray(arr) || !arr.length) return [].concat(arr);
  const [val, ...rest] = arr;
  return [...flatten(val), ...flatten(rest)];
}

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3]
