# datastructure-and-algorithms

Learn Data Structure and Algorithms using Javascript

# Time Complexity Rules of thumb

O(1) < O(logn) < O(n) < O(n logn) < O(n^2)

# Space Complexity Rules of thumb

a) Most primitives (boolean, numbers, undefined, null) are constant\
b) String requires O(n), n = string length\
c) Similar for reference types: (arrays and objects) => O(n)

# Object Methods Big O

Object.keys - O(N)\
Object.values - O(N)\
Object.entries - O(N)\
hasOwnProperty - O(1)

# Arrays Big O

Insertion - depends
a) Beginning of array -> O(N)\
b) End of array -> O(1)

Removal - depends
a) Beginning of array -> O(N)\
b) End of array -> O(1)

# Array Methods Big O

Note: push & pop are always faster than shift & unshift

push - O(1)\
pop - O(1)\
shift - O(1)\
unshift - O(1)\
concat - O(N)\
slice - O(N)

slice (start, end) => doesnt alter array instead create a new array with start & (end - 1)\
splice (start, delecteCount, item1, item2 ...) - O(N) => changes existing array\
sort - O(Nlog N)\
forEach / map / filter / reduce / etc.. - O(N)

Searching - O(N)\
Access - O(1)

# Problem Solving Patterns

Frequency Counters - O(n) [mostly with objects]
Multiple Pointers
