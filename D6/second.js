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
  let init = false;
  // console.log('*** new v')
  let all = new Set();
  for (let line of v.split('\n')) {
    // console.log(line)
    if (line) {
      line = line.split('\n').join('');
      if (!init) {
        init = true;
        all = new Set(line.split('\n').join('').split(''));
          // console.log('def');
          // console.log(all);
      } else {
        let other = new Set(line.split(''));
        all = new Set([...all].filter(x => other.has(x)))
      }
    }
  }
  count+= all.size;
  // console.log(all);

}
console.log(count);

// for (const v of input) {
//   for (const v2 of input) {
//
//   }
// }



// ----------- GUESSES -------------------------












