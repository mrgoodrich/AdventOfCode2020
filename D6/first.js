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
const entireLine = /([^\n]+[\n]?)+\n\n/gm

const regex = entireLine; //      /()\n/gm;

let input = [];
let count = 0;

// ----------- SOLUTION ------------------------
let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push(entireMatch);

}



for (const v of input) {
  console.log(v);
  const s1 = new Set();
  for (const letter of v) {
    if (letter != '\n') {
      s1.add(letter);
    }
  }
  count+= s1.size;
  console.log(s1);

}
console.log(count);

// for (const v of input) {
//   for (const v2 of input) {
//
//   }
// }



// ----------- GUESSES -------------------------












