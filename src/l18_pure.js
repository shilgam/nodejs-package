import { length, toUpperCase } from './l18_strings';

// BEGIN (write your solution here)
const solution = (str) => {
  const EOL = length(str);
  let result = str;
  for (let i = 0; i < EOL; i += 1) {
    result = result.charAt(0).toUpperCase() + result.substr(1, EOL - 1);
    if ((str[i] === ' ') && (str[i + 1] !== undefined)) {
      result = result.substr(0, i + 1) +
               result.charAt(i + 1).toUpperCase() +
               result.substr(i + 2, EOL - 1);
    }
  }
  return result;
};

export default solution;
// END
const sentence = 'how are you, giys? '
console.log(`Sentence: ${sentence}` + `EOL`)
console.log(`Solution: ${solution(sentence)}` + `EOL`);
