// РАЗМЕТКА

// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
//     >>>>>  EX  <<<<<
// Реализуйте базовый интерфейс для создания htmll
// #### 1 make
export const make = () => l();

// #### 2 node
export const node = (tag_name, value) => cons(tag_name, value);

// #### 3 name
export const name = node => car(node);

// #### 4 value
export const value = (node) => cdr(node);

// #### 5 append
export const append = (list, element) => consList(element, list);

// const node_5 = node('p5', 'paragraph');
// console.log(listToString(append(make(), node_5)));  // ('p5', 'paragraph')

// #### 6 toString
const nodeToString = node => {
  let tag = name(node);
  let body = value(node);
  return `<${tag}>${body}</${tag}>`;
};
// console.log(nodeToString(node1));  // <p1>paragraph</p1>


const toString_iter = (list, string) => {
  if (! isEmpty(tail(list))) {
    const tag = nodeToString(head(list));
    console.log(tag);
    const list_formatted = append(list, tag);
    return toString_iter(tail(list), list_formatted);
  } return list_new;
};


const iter = (list_old, list_new) => {
  if (! isEmpty(tail(list_old))) {
    list_old = tail(list_old);
    list_new = cons(head(list_old), list_new);

    return iter(list_old, list_new);
  } return list_new;
};

const reverse = (list) => {
  if (isEmpty(list)) {
    return list;
  } else {
    let l_new = l(head(list));
    return iter(list, l_new);
  }
};

export const toString = (list) => {
  let accum = '';
  let list_iter = reverse(list);

  while (! isEmpty(list_iter)) {
    let node = head(list_iter);
    let str = nodeToString(node);
    accum = accum.concat(nodeToString(node));
    list_iter = tail(list_iter);
  }
  return accum;
};

const dom1 = make();
const dom2 = append(dom1, node('h1', 'hello, world'));
// const dom3 = append(dom2, node('h2', 'header2'));
// const tag = node('h3', 'header3');
// const dom = append(dom3, tag);
// console.log(listToString(dom)); // <h1>hello, world</h1><h2>header2</h2><h3>header3</h3>
// END
