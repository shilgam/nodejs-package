// BEGIN (write your solution here)
export default (text) => {
  const result = [];
  // before, inside, after
  let state = 'before';
  let word = [];
  Array.from(text).forEach((symbol) => {
    if (symbol === '\n' && word.length > 0) {
      result.push(word.join(''));
      word = [];
      state = 'before';
    }
    switch (state) {
      case 'before':
        if (symbol !== ' ' && symbol !== '\n') {
          state = 'inside';
          word.push(symbol);
        }
        break;
      case 'inside':
        if (symbol !== ' ') {
          word.push(symbol);
        } else {
          state = 'after';
        }
        break;
      case 'after':
        break;
      default:
        throw new Error(`Unexpected state '${state}'`);
    }
  });
  return result;
};
// END
