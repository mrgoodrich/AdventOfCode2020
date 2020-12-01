// ----------- PACKAGES -----------------------
const fs = require('fs');
const {all, any, contains, enumerate, filter, iter, map, partition, permutations, range, reduce, reduce_, sorted, sum, toArray, zip, zip3} = require('iter-tools');
const {max, min} = require('itertools');
// const Map = require('collections/map');
// const pycollections = require('pycollections');

// ----------- INPUT SETUP --------------------
const input = fs.readFileSync('inputs/input', 'utf8');

// ----------- TESTING AND REGEX -----®---------
const nonWhitespace = /\S+/g;
const positiveOrNegativeNumber = /(-?)(\d+)/g;
const numberAndWord = /(-?)(\d+) \S+/g;
const entireLine = /^(\S*)(?:\n)/gm

const regex = entireLine;

// ----------- SOLUTION ------------------------
let result;

let parsed = [];

while((result = regex.exec(input)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  parsed.push(parseInt(entireMatch));
}

for (const f of parsed) {
  for (const s of parsed) {
    for (const t of parsed) {
      if (f + s + t == 2020) {
        console.log(f * s * t);
      }
    }
  }
}

// ----------- GUESSES -------------------------
