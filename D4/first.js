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
const entireLine = /([^\n\n]+\n)+/gm

const regex = entireLine; // /((\D+):\S+)+\n/gm;

let input = [];
let count = 0;

// ----------- SOLUTION ------------------------
let result;
while((result = regex.exec(inFile)) !== null) {
  const entireMatch = result[0]; // has new line char if entireLine
  const firstGroup = result[1];
  input.push(entireMatch);
  // console.log(result)
}

// for (const ndx in input) {
//
// }

// for (const v of input) {
//   for (const v2 of input) {
//
//   }
// }

for (const v of input) {
  let toMatch = new Set(["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"]);


  // console.log(v + "end")
  // console.log(v.split("\n").join(" ").split(" "));
  const arr = new Set(v.split("\n").join(" ").split(" "));

  // console.log(arr);

  for (const e of arr) {
    toMatch.delete(e.split(":")[0]);
  }
  console.log(toMatch);
  if (toMatch.size == 0 || (toMatch.size == 1 && toMatch.has("cid"))) {
    count++;
  }
}
console.log(count);



// ----------- GUESSES -------------------------












