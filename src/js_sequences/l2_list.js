// Представление последовательностей


// eslint-disable-next-line
import { l, cons, head, tail, isEmpty, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)

//     >>>>>  EX #1  <<<<<
//     Реализуйте и экспортируйте функцию has, которая проверяет, является ли
//     переданное значение элементом списка.
export const has = (list, elem) => {
  while (isEmpty(list) === false) {
    if (head(list) === elem) {
      return true;
    } else {
      return has(tail(list), elem);
    }
  }
  return false;
};
// const numbers = l(3, 4, 5, 8);
// console.log(has(numbers, 8)); // true
// console.log(has(numbers, 0)); // false
// ---------------------------------

//     >>>>>  EX #2  <<<<<
//     Реализуйте и экспортируйте функцию reverse, которая переворачивает список,
//     используя итеративный процесс.
const iter = (list_old, list_new) => {
  if (! isEmpty(tail(list_old))) {
    list_old = tail(list_old);
    list_new = cons(head(list_old), list_new);

    return iter(list_old, list_new);
  } return list_new;
};

export const reverse = (list) => {
  if (isEmpty(list)) {
    return list;
  } else {
    let l_new = l(head(list));
    return iter(list, l_new);
  }
};
// const list1 = l('hello,', 'world!', 1, 2, 3);
// console.log(listToString(reverse(list1)));
// ---------------------------------

//     >>>>>  EX #3  <<<<<
//     Реализуйте и экспортируйте функцию concat, которая соединяет два списка,
//     используя рекурсивный процесс (попробуйте сначала представить, как работала
//     бы функция copy, которая принимает на вход список и возвращает его копию).

const get_last_el = (list) => {
  if (isEmpty(list)) {
    return list;
  } else if (isEmpty(tail(list))) {
    return head(list);
  } else {
    return get_last_el(tail(list));
  }
};
// const list2 = l(3, 4, 5, 8);
// console.log(get_last_el(list2));

const iter_concat = (list1, list2) => {
  console.log(`${listToString(list1)}     ${listToString(list2)}`)
  if (isEmpty(list1)) {
    return list2;
  } else {
    let list1_new = tail(list1);
    let list2_new = cons(head(list1), list2);
    return iter_concat(list1_new, list2_new);
  }
};

console.log(`RESULTS: ${listToString(iter_concat(l(1, 2), l(3, 4)))}`);

export const concat = (list1, list2) => iter_concat(reverse(list1), list2);

// const numbers = l(3, 4, 5, 8);
// const numbers2 = l(3, 2, 9);
// concat(numbers, numbers2); // (3, 4, 5, 8, 3, 2, 9)
// END
