import { length, toUpperCase } from './l16_strings';

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  const regexp = /[A-Z ]/;
  let counter = 0;

  for (let i = 0; i < length(str); i += 1) {
    if (regexp.test(str[i])) {
      counter += 1;
    }
  }
  return counter;
  // END
};

console.log(bigLettersCount('heLLo!   '));

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  }

  return 0;
  // END
};

console.log(compare('wEd', 'd dd'));

export const greaterThan = (first, second) =>
  compare(first, second) === 1;

export const lessThan = (first, second) =>
  compare(first, second) === -1;

export const isEqual = (first, second) =>
  compare(first, second) === 0;
