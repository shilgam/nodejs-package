// BEGIN (write your solution here)
export default (text) => {
  let state = 'outsideStr';

  let result = [];
  let word = '';
  let wordCount = 0;

  const accumWord = (letter, word) => {
    return word.concat(letter);
  };

  const accumArr = (wordIndex, array, word) => {
    if (wordIndex === 0) {
      // console.log(`>>>>>>> wordIndex: ${wordIndex}.  result: "${array.concat(word)}"`);
      return array.concat(word);
    } return array;
  };

  for (let symbol = 0; symbol < text.length; symbol += 1) {
    switch (state) {
      case 'outsideStr':
        if (text[symbol] === ' ') {
          state = 'outsideWord';
          // console.log(`>>> 12: symbol=${symbol}. text[symbol]='${text[symbol]}'`);
        } else if (text[symbol] !== ' ' && text[symbol] !== '\n') {
          state = 'insideWord';
          word = accumWord(text[symbol], word);
          // console.log(`>>> 13: symbol=${symbol}. text[symbol]='${text[symbol]}' --> ${word}`);
        } else if (text[symbol] === '\n') {
          /* state is the same */
          // console.log(`>>> 11: symbol=${symbol}. text[symbol]='${text[symbol]}'`);
          wordCount = 0;
          word = '';
        }
        break;

      case 'outsideWord':
        if (text[symbol] === ' ') {
          /* state is the same */
          // console.log(`>>> 22: symbol=${symbol}. text[symbol]='${text[symbol]}'`);
        } else if (text[symbol] !== ' ' && text[symbol] !== '\n') {
          state = 'insideWord';
          word = '';
          word = accumWord(text[symbol], word);
          // console.log(`>>> 23: symbol=${symbol}. text[symbol]='${text[symbol]}'--> ${word}`);
        } else if (text[symbol] === '\n') {
          state = 'outsideStr';
          // console.log(`>>> 21: symbol=${symbol}. text[symbol]='${text[symbol]}'`);
          wordCount = 0;
          word = '';
        }
        break;

      case 'insideWord':
        if (text[symbol] === ' ') {
          state = 'outsideWord';
          result = accumArr(wordCount, result, word);
          wordCount += 1;
          // console.log(`>>> 32: symbol=${symbol}. text[symbol]='${text[symbol]}'`);
        } else if (text[symbol] !== ' ' && text[symbol] !== '\n') {
          state = 'insideWord';
          word = accumWord(text[symbol], word);
          // console.log(`>>> 33: symbol=${symbol}. text[symbol]='${text[symbol]}' --> ${word}`);
        } else if (text[symbol] === '\n') {
          state = 'outsideStr';
          result = accumArr(wordCount, result, word);
          // console.log(`>>> 31: symbol=${symbol}. text[symbol]='${text[symbol]}'`);
          wordCount = 0;
          word = '';
        }
        break;

      default:
        console.log('> default case');
    }
  }
  return result;
};
// END
