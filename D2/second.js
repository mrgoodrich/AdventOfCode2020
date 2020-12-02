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

const regex = /(\d+)-(\d+) (\D): (\D+)\n/gm;

let input = [];

let count = 0;

// ----------- SOLUTION ------------------------
let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push(firstGroup);

  const min = result[1] - 1;
  const max = result[2] - 1;
  const letter = result[3];
  const test = result[4];

  let curCount = 0;
  let word = test.split('');
  if ((word[min] == letter && word[max] != letter) ||
(word[min] != letter && word[max] == letter)) {
    count++;
  }
  // console.log(curCount);
  // if (curCount >= min && curCount <= max) {
  //   count++;
  // }
}
console.log(count);

// for (const ndx in input) {
//   console.log(ndx);
//   console.log(input[ndx]);
// }

// for (const v of input) {
//   for (const v2 of input) {
//
//   }
// }



// ----------- GUESSES -------------------------












