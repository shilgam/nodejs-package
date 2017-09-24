// СВЕРТКА
import { isEmpty, head, tail, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { value, is, toString as htmlToString, node, append, make, name } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
//     >>>>>  EX #1  <<<<<
//     Реализуйте и экспортируйте функцию reduce для библиотеки html-tags

export const reduce = (func, accum, list) => {
  if (isEmpty(list)) {
    return accum;
  }
  const elem = head(list);
  const newAccum = func(elem, accum);
  // console.log(`>>>newAccum:   ${newAccum}.   (${name(elem)},  ${value(elem)})`);
  return reduce(func, newAccum, tail(list));
};

const html1 = make();
const html2 = append(html1, node('h1', 'scheme'));
const html3 = append(html2, node('p', 'is a lisp'));
const html4 = append(html3, node('blockquote', ''));
const html5 = append(html4, node('blockquote', ''));
const html6 = append(html5, node('blockquote', 'quote'));
// console.log(`>>>>>        html3:   ${htmlToString(html3)}`);

const reduceExample = reduce((element, acc) => {
  return is('h1', element) ? acc + 1 : acc;
}, 0, html3); // 2
// console.log(`>>>>>       reduce:   ${reduceExample}`);
//     -------------------

//     >>>>>  EX #2  <<<<<
//    Реализуйте и экспортируйте функцию emptyTagsCount, которая считает
//    количество пустых тегов. Тип тега задается первым параметром функции.

export const emptyTagsCount = (tag, list) => {
  return reduce((element, acc) => (is(tag, element) && value(element) === '') ? acc + 1 : acc, 0, list);
};

// console.log(`>>> emptyTagsCount:   ${emptyTagsCount('blockquote', html6)}`); // 2
// END

export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};

// console.log(`>headersCount:   ${headersCount('h1', html3)}`); // 2
