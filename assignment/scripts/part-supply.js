console.log('****** Part Supply *******');
// ***** REQUIRED FEATURES *********************************************
// For each question, be sure to use console.log statements to ensure that
// your code does what you expect!

// 1. Create a variable called 'partsNeeded' with a value of the number 40.
console.log('1. Create partsNeeded:');

let partsNeeded = 40;
console.log('needed:', partsNeeded);

// 2. Create a variable called 'supplyChanges' whose value is an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11.
console.log('2. Create supplyChanges:');

let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log('supply array:', supplyChanges);

// 3. Create a variable called 'secondItem' and assign it the value of the second
//    item in the 'supplyChanges' array.
console.log('3. Access the second value of supplyChanges:');
let secondItem = supplyChanges[1];
console.log('item two:', secondItem);

// 4. The last value in the 'supplyChanges' array was added by mistake.
//    Remove it from the array and store it inside a new variable called 'removedItem'.
console.log('4. Remove the last value from supplyChanges:');

let removedItem = supplyChanges.pop();
console.log("removed:", removedItem);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Add the value 25 into supplyChanges.');

supplyChanges.push(25);
console.log('add 25 to parts:', supplyChanges);

// 6. Create three new variables named 'positives', 'negatives', and
//    'zeroes' whose values are empty arrays. Then, write a for loop
//    that loops through the 'supplyChanges' array. For each iteration of
//    the loop:
//      - If the value is a positive number, push it into the 'positives' array.
//      - If the value is a negative number, push it into the 'negatives' array.
//      - If the value is a zero, push it into the 'zeroes' array.
console.log('6. Looping through supplyChanges to populate arrays with positive, negative, and zero values:');

let positives = [];
let negatives = [];
let zeroes = [];

for (let i = 0; i < supplyChanges.length; i++) {
  const allSupplies = supplyChanges[i];

  if (allSupplies > 0) {
    positives.push(allSupplies);
  } else if (allSupplies < 0) {
    negatives.push(allSupplies);
  } else {
    zeroes.push(allSupplies);
  }
}
console.log('positive array:', positives);
console.log('negative array:', negatives);
console.log('zero array:', zeroes);

// ***** STRETCH GOALS *********************************************
// 7. Rewrite the 'for' loop from #6 as a 'for...of' loop. Instead of 'positives',
//    'negatives', and 'zeroes', create three new arrays named 'stretchPositives',
//    'stretchNegatives', and 'stretchZeroes'. 
console.log('7. Looping through supplyChanges to populate more arrays with positive, negative, and zero values:');

let stretchPositives = [];
let stretchNegatives = [];
let stretchZeroes = [];

for (numbers of supplyChanges) {
  if (numbers > 0) {
    stretchPositives.push(numbers);
  } else if (numbers < 0) {
    stretchNegatives.push(numbers);
  } else {
    stretchZeroes.push(numbers);
  }
}

console.log('stretch Positives array:', stretchPositives);
console.log('stretch negatives array:', stretchNegatives);
console.log('stretch zeroes array:', stretchZeroes);

// 8. Create a variable called 'totalParts' and assign it a value of 0.
//    Then, write a loop that adds each value of the 'supplyChanges'
//    array to the 'totalParts' variable.
console.log('8. Looping through supplyChanges to calculate the sum:');

let totalParts = 0;

for (let numbers of supplyChanges) {
  totalParts += numbers;
}
console.log('sum parts:', totalParts);


// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. There are 572
//    parts in total, and each box holds 7 parts.
//    Create two variables:
//      1. 'parts': Set its value to 572
//      2. 'boxesFilled': Set its value to 0
//    Use a 'while' loop to keep adding parts to boxes UNTIL
//    no more boxes can be filled. When the loop is finished,
//    the value of 'parts' should reflect how many parts are
//    "left over," and the value of 'boxesFilled' should reflect
//    how many boxes were filled.
console.log('9. Filling boxes with a "while" loop');

let parts = 572;
let boxesFilled = 0;
let partsInBox = 7;

while (partsInBox < parts) {
  parts -= partsInBox;
  boxesFilled++;
}
console.log('filled boxes:', boxesFilled);
console.log('leftovers:', parts);



// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    partsNeeded: typeof partsNeeded !== 'undefined' ? partsNeeded : undefined,
    supplyChanges: typeof supplyChanges !== 'undefined' ? supplyChanges : undefined,
    secondItem: typeof secondItem !== 'undefined' ? secondItem : undefined,
    removedItem: typeof removedItem !== 'undefined' ? removedItem : undefined,
    positives: typeof positives !== 'undefined' ? positives : undefined,
    negatives: typeof negatives !== 'undefined' ? negatives : undefined,
    zeroes: typeof zeroes !== 'undefined' ? zeroes : undefined,
    stretchPositives: typeof stretchPositives !== 'undefined' ? stretchPositives : undefined,
    stretchNegatives: typeof stretchNegatives !== 'undefined' ? stretchNegatives : undefined,
    stretchZeroes: typeof stretchZeroes !== 'undefined' ? stretchZeroes : undefined,
    totalParts: typeof totalParts !== 'undefined' ? totalParts : undefined,
    parts: typeof parts !== 'undefined' ? parts : undefined,
    boxesFilled: typeof boxesFilled !== 'undefined' ? boxesFilled : undefined,
  }
} catch (e) {
  // Do nothing
}
