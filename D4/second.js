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
    console.log(e)
    console.log(validate(e));
    if (e && validate(e)) {
      toMatch.delete(e.split(":")[0]);
    }
  }
  // console.log(toMatch);
  if (toMatch.size == 0 || (toMatch.size == 1 && toMatch.has("cid"))) {
    count++;
  }
}
console.log(count);

function validate(str) {
  let split = str.split(":");
  let val = split[1];

  switch (split[0]) {
    case "byr":
      return val.length == 4 && val >= 1920 && val <= 2002;
    case "iyr":
      return val.length == 4 && val >= 2010 && val <= 2020;
    case "eyr":
      return val.length == 4 && val >= 2020 && val <= 2030;
    case "hgt":
      if (val.endsWith("cm")) {
        let num =  val.replace("cm", "");
        return num >= 150 && num <= 193;
      } else if (val.endsWith("in")) {
        let num =  val.replace("in", "");
        return num >= 59 && num <= 76;
      } else {
        return false;
      }
    case "hcl":
      if (!val.startsWith("#")) {
        return false;
      }
      return /([a-f|\d]{6})/.exec(val.replace("#", "")) !== null;
    case "ecl":
      return ['amb','blu','brn','gry','grn','hzl','oth'].includes(val);
    case "pid":
      return val.length == 9 && /\d{9}/.exec(val) !== null;
    case "cid":
      return true;
  }
}



// ----------- GUESSES -------------------------
// 190 no











