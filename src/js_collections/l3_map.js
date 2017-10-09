import 'babel-polyfill';
/*
  solution.js
Реализуйте и экспортируйте функцию wordsCount, которая принимает на вход два
параметра: список слов и список стоп-слов. Задача функции вернуть объект типа
Map, содержащий в себе частоту переданных слов. То есть, ключами являются сами
слова, а значениями число повторений.

Слова могут быть в разных регистрах, а подсчет должен работать без учета регистра.
Соответственно в результирующем наборе слова должны быть представлены в нижнем регистре.
Порядок слов в выходе должен совпадать с порядком появления новых слов во входном наборе
stopWords это список стоп-слов, то есть эти слова не должны попадать в результирующую структуру
> const stopWords = ['and', 'or', 'a', 'the', ''];
> const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
> wordsCount(words, stopWords); // [['hello', 3], ['h', 1], ['dog', 1], ['cat', 2]]

  ПОДСКАЗКИ
* Воспользуйтесь тройкой map/filter/reduce.
* Функция has типа Map проверяет наличие ключа в мапе
*/

// BEGIN (write your solution here)

const occurrences = (elem, arr) => arr.filter(currEl => currEl === elem).length;

const removeOccurences = (word, arr) => arr.filter(elem => (elem !== word));

const removeStopWords = (words, stopWords) => {
  let iterList = words;
  stopWords.forEach((elem) => {
    iterList = removeOccurences(elem, iterList);
  });
  return iterList;
};

export const wordsCount = (words, stopWords) => {
  const wordsInLowerCase = words.map(word => word.toLowerCase());
  // console.log(`>>>>    LowerCase:  ${wordsInLowerCase}`);
  const pureWords = removeStopWords(wordsInLowerCase, stopWords);
  // console.log(`>>>>    pureWords:  ${pureWords}`);

  const map = new Map();

  const iter = (wordsList) => {
    if (wordsList.length === 0) {
      return map;
    }
    const word = wordsList[0];
    const counter = occurrences(word, wordsList);
    map.set(word, counter);
    const newList = removeOccurences(word, wordsList);
    return iter(newList);
  };
  return iter(pureWords);
};

export default wordsCount;
// END

// // OUTPUT:
// const stopWords = ['and', 'or', 'a', 'the', ''];
// const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
// const myMap = wordsCount(words, stopWords);
// myMap.forEach((key, value) => console.log(`>> key: ${key},   val: ${value}`));
