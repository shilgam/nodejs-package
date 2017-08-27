import { length } from './l17_strings';

// BEGIN (write your solution here)
const sum = (num) => {
  const str = String(num);
  let result = 0;
  console.log('Sym of all digits: ')
  for (let i = 0; i < length(str); i += 1) {
    result += Number(str[i]);
  }
  return result;
};

const addDigits = (num) => {
  let result = num;
  while (result > 10) {
    result = sum(result);
  }
  return result;
};

export default addDigits;
// END

console.log(sum(12345));
console.log(sum(15));

console.log(addDigits(12345));
