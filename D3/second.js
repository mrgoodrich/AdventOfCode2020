// ----------- PACKAGES -----------------------
const fs = require('fs');
const {all, any, contains, enumerate, filter, iter, map, partition, permutations, range, reduce, reduce_, sorted, sum, toArray, zip, zip3} = require('iter-tools');
const {max, min} = require('itertools');
// const Map = require('collections/map');
const pycollections = require('pycollections');

// ----------- INPUT SETUP --------------------
const inFile = fs.readFileSync('inputs/input', 'utf8');

// ----------- TESTING AND REGEX -----®---------
const nonWhitespace = /\S+/g;
const positiveOrNegativeNumber = /(-?)(\d+)/g;
const numberAndWord = /(-?)(\d+) \S+/g;
const entireLine = /^(\S*)(?:\n)/gm

const regex = entireLine;

let input = [];
let count = 0;

const square = '.';
const tree = '#';

// ----------- SOLUTION ------------------------
let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push(firstGroup);

}

// for (const ndx in input) {
//
// }

// for (const v of input) {
//   for (const v2 of input) {
//
//   }
// }

console.log(find(1, 1) * find(3, 1)* find(5, 1)* find(7, 1)* find(1, 2));

function find(right, down) {
  let skipped = true;
  count = 0;
let x = 0;

for (let v of input) {
  if (down == 1 || skipped) {
    let curX = x;
    curX %= v.length;
    if (v.split('')[curX] == tree) {
      count ++;
    }
    console.log(v.split('')[curX])
    x+= right;
  }
  skipped = !skipped;
}
return count;
}


// ----------- GUESSES -------------------------












