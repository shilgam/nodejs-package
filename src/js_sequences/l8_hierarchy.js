// eslint-disable-next-line
import { l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString,
  length } from 'hexlet-pairs-data';
// eslint-disable-next-line
import { is, toString as htmlToString, hasChildren, children, filter, reduce,
  make, append, node } from 'hexlet-html-tags';

// BEGIN (write your solution here)

/*  >>>>>  EX  <<<<<
    Реализуйте и экспортируйте по-умолчанию функцию select, которая принимает
    на вход имя тега, а возвращает список всех нод соответствующих имени.
    Ноды возвращаются в том виде, в котором они представлены в дереве,
    другими словами если у возвращаемых нод есть потомки, они так же остаются
    внутри ноды. Порядок, в котором ноды возвращаются - не важен.
*/

const dom1 = make();
const dom2 = append(dom1, node('h1', 'scheme'));
const dom3 = append(dom2, node('p', 'is a lisp'));

const children1 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom4 = append(dom3, node('ul', children1));
const children2 = l(node('li', 'item 1'), node('li', 'item 2'));
const dom5 = append(dom4, node('ol', children2));
const dom6 = append(dom5, node('p', 'is a functional language'));
const children3 = l(node('li', 'item'));
const dom7 = append(dom6, node('ul', children3));
const dom8 = append(dom7, node('div', l(node('p', 'another text'))));
const dom9 = append(dom8, node('div', l(node('div', l(node('p', l(node('span', 'text'))))))));

const dom10 = append(dom9, node('h1', 'prolog'));
const dom = append(dom10, node('p', 'is about logic'));

// `hasChildren` - функция, которая проверяет, есть ли потомки у элемента
// console.log(`>>>>>   hasChildren(dom1):  ${hasChildren(dom1)}`); // Error
// console.log(`>>>>>   hasChildren(dom2):  ${hasChildren(dom2)}`); // false
// console.log(`>>>>>   hasChildren(dom3):  ${hasChildren(dom3)}`); // true

// `children` - функция, которая возвращает список потомков
// console.log(`>>>>>   children(dom2):  ${htmlToString(children(dom2))}`); // dom1
// console.log(`>>>>>   children(dom3):  ${htmlToString(children(dom3))}`); // dom2
// console.log(`>> children(children1):  ${htmlToString(children(children1))}`); // tail(list)

const select = (tagName, html) => reduce((element, acc) => {
  const acc2 = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
  return is(tagName, element) ? consList(element, acc2) : acc2;
}, make(), html);

export default select;

// let myList = select('span', dom);
// console.log(`>>>>>   select:  ${htmlToString(myList)}   >>> length: ${length(myList)}`); // .toBe(1)
// myList = select('section', dom);
// console.log(`>>>>>   select:  ${htmlToString(myList)}   >>> length: ${length(myList)}`); // .toBe(0);
// myList = select('li', dom);
// console.log(`>>>>>   select:  ${htmlToString(myList)}   >>> length: ${length(myList)}`); // .toBe(5);
// myList = select('p', dom);
// console.log(`>>>>>   select:  ${htmlToString(myList)}   >>> length: ${length(myList)}`); // .toBe(5);
// myList = select('h1', dom);
// console.log(`>>>>>   select:  ${htmlToString(myList)}   >>> length: ${length(myList)}`); // .toBe(2);
// END
