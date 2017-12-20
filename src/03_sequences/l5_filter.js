// ФИЛЬТРАЦИЯ СПИСКОВ
import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, append, node, value, is, toString as htmlToString, map} from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
//     >>>>>  EX #1  <<<<<
//     Реализуйте и экспортируйте функцию filter для библиотеки html-tags,
//     используя итеративный процесс:

export const filter = (operator, list) => {
  if (isEmpty(list)) {
    return null;
  }
  const elem = head(list);
  const tailElements = filter(operator, tail(list));
  return (operator(elem)) ? cons(elem, tailElements) : tailElements;
};

const html1 = append(make(), node('h1', 'header1'));
const html2 = append(html1, node('h1', 'header2'));
const html3 = append(html2, node('p', 'content'));
const processedHtml = filter(element => !is('h1', element), html3);
// console.log(`>>>>>            html3:   ${htmlToString(html3)}`);
// console.log(`>>>>>    processedHtml:   ${htmlToString(processedHtml)}`);  // <p>content</p>
//     -------------------

//     >>>>>  EX #2  <<<<<
//     Реализуйте и экспортируйте функцию quotes, которая извлекает
//     из html тексты цитат и возвращает список цитат.

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));
const dom4 = append(dom3, node('blockquote', 'live is live'));
const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));

export const quotes = (list) => {
  const filtetedList = filter(elem => is('blockquote', elem), list);
  return map(value, filtetedList);
};

// console.log(`>>>>>     quotes(dom5):   ${listToString(quotes(dom5))}`);  // ('i am sexy, and i know it', 'live is live');
// END

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};
