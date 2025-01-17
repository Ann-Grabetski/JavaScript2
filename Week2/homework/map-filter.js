'use strict';

function doubleOddNumbers(numbers) {
  const newNumbers = numbers.filter(i => i % 2 !== 0).map(i => i * 2);
  return newNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
