// ОТОБРАЖЕНИЕ СПИСКОВ
import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { name, value, node, is, toString as htmlToString,
  make, append } from 'hexlet-html-tags'; // eslint-disable-line
import { reverse as reverseStr } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
//     >>>>>  EX #1  <<<<<
//     Реализуйте функцию map для библиотеки html-tags.
//     Реализация должна быть рекурсивной с использованием итеративного процесса.
// import { make, append, node, value, is } from 'hexlet-html-tags';
const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('blockquote', 'is a lisp'));
// console.log(`>>>>>         dom3:   ${listToString(dom3)}`);

export const map = (operator, elements) => {
  if (isEmpty(elements)) {
    return null;
  }
  const elem = operator(head(elements));
  return cons(elem, map(operator, tail(elements)));
};

const replacingOper = (element) => {
  if (is('h1', element)) {
    return node('h2', value(element));
  }
  return element;
};

const processedDom = map(replacingOper, dom3);
console.log(`>>>>> processedDom:   ${listToString(map(replacingOper, dom3))}`);
//     -------------------

//     >>>>>  EX #2  <<<<<
//     Реализуйте функцию mirror, которая переворачивает содержимое тегов,
//     так чтобы читать его нужно было справа налево, а не слева направо.

const mirrorOperator = (element) => {
  const newBody = reverseStr(value(element));
  return node(name(element), newBody);
};

export const mirror = elements => map(mirrorOperator, elements);
// console.log(`>>>> mirrored dom3:   ${htmlToString(mirror(dom3))}`); // <h1>emehcs</h1><p>psil a si</p>
// END

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }
  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }
  return cons(newElement, b2p(tail(elements)));
};

// console.log(listToString(dom3));       // (pair: (blockquote, is a lisp), pair: (h1, scheme))
// console.log(listToString(b2p(dom3)));  // (pair: (p, is a lisp), pair: (h1, scheme))
