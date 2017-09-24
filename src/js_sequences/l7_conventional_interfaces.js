// СТАНДАРТНЫЕ ИНТЕРФЕЙСЫ
import { toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { node, value, is, toString as htmlToString,  map, filter, reduce, append, make } from 'hexlet-html-tags'; // eslint-disable-line
import { wc } from './utils'; // eslint-disable-line

// BEGIN (write your solution here)

const html1 = append(make(), node('h2', 'header1 lisp'));
const html2 = append(html1, node('p', 'content'));
const html3 = append(html2, node('h2', 'lisp header2 lisp'));
const html4 = append(html3, node('p', 'content lisp'));
// console.log(`>>>>>          html4:    ${htmlToString(html4)}`);

//     >>>>>  EX #1  <<<<<
//     Реализуйте и экспортируйте функцию extractHeaders, которая извлекает все
//     заголовки h2 из html и возвращает новый html, в котором заголовки
//     заменены на p. Тело при этом остается тем же.

export const extractHeaders = (html) => {
  const filtered = filter(elem => is('h2', elem), html);
  const replaced = map(elem => node('p', value(elem)), filtered);
  return replaced;
};

// console.log(`>>>>> extractHeaders:    ${htmlToString(extractHeaders(html3))}`);  // <p>header1 lisp</p><p>lisp header2 lisp</p>

//     >>>>>  EX #2  <<<<<
//     Реализуйте и экспортируйте функцию wordsCount, которая считает вхождения
//     слова в определенный тег. Для подсчета слов в тексте одного тега
//     воспользуйтесь вспомогательной функцией wc, которая уже импортирована в
//     модуль html-tags.

export const wordsCount = (tag, word, html) => {
  return reduce((elem, acc) => acc + wc(word, value(elem)),
                0,
                filter(elem => is(tag, elem), html));
};

// console.log(`>>>>>     wordsCount:    ${wordsCount('h2', 'lisp', html4)}`);  // 3
// END
