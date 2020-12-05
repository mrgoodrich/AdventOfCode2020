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
const entireLine = /([^\n]*)\n/gm

const regex = entireLine; //      /()\n/gm;

let input = [];
let count = 0;

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


const m1 = new Map();

for (const v of input) {
  let seat = getSeat(v);
  if (m1.has(seat[0])) {
    m1.get(seat[0]).push(seat[1]);
  } else {
    m1.set(seat[0], [seat[1]]);
  }
}


for (let row = 0; row < 100; row++) {
  let seats = m1.get(row);
  if (seats && seats.length != 8) {
    // console.log("row: " + row + ", count: " + seats); - gives 85 and 5 missing
    console.log(85 * 8 + 5)
  }
}


function getSeat(pass) {
  let minRow = 0, maxRow = 127;
  let minSeat = 0, maxSeat = 7;
  for (const c of pass) {
    switch (c) {
      case "F":
        maxRow -= (1 + maxRow - minRow) / 2;
        break;
      case "B":
        minRow += (1 + maxRow - minRow) / 2;
        break;
      case "L":
        maxSeat -= (1 + maxSeat - minSeat) / 2;
        break;
      case "R":
      minSeat += (1 + maxSeat - minSeat) / 2;
        break;
    }
  }
  return [minRow, minSeat];


}

// ----------- GUESSES -------------------------
// 8 - 4 / 2 = 2   2 - 7











