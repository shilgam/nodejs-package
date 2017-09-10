import { cons, car, cdr, toString } from './l3_base';
/*
В этом задании мы немного потренируемся работать с парами. Без фанатизма и по шагам.
Шаг 1 - reversePair.js
Реализуйте функцию reversePair, которая принимает на вход пару и возвращает другую,
в которой значения переставлены местами:
import { cons, car, cdr, toString } from 'hexlet-pairs';
const pair = cons('one', 'two');
console.log(toString(reversePair(pair))); // ('two', 'one')
*/
const reversePair = pair => cons(cdr(pair), car(pair));
// const p1 = cons(1, 2);
// console.log(reversePair(p1));


/*
Шаг 2 - sumOfPairs.js
Реализуйте функцию sumOfPairs, которая принимает на вход две пары и возвращает новую пару,
в элементах которой находятся суммы элементов из исходных пар:
*/
const sumOfPairs = (pair1, pair2) => {
  const newX = car(pair1) + car(pair2);
  const newY = cdr(pair1) + cdr(pair2);
  return cons(newX, newY);
};
// const pair1 = cons(4, 10);
// const pair2 = cons(100, 0);
// console.log(toString(sumOfPairs(pair1, pair2))); // (104, 10)


/*
Шаг 3 - findPrimitiveBox.js
Однажды вы сидели дома, когда курьер Василий принес вам коробку.
С коробкой шла записка следующего содержания:

Коробка стоит их двух отсеков, в одном из которых пусто, а в другом лежит еще
одна коробка, в которой также два отсека и точно также один отсек пустой, а в
другом - коробка. Коробки могут быть вложены друг в друга сколько угодно раз.
Вам нужно добраться до коробки, внутри которой нет вложенной коробки, и отдать
ее курьеру.

Подчеркну, что во всех коробках, кроме той последней, в одном отсеке пусто,
а в другом - всегда коробка, но никогда не две коробки одновременно и никогда не
две пустоты. Сами отсеки при этом могут меняться, то есть в одной коробке пустым
отсеком может быть первый, а в другой - последний.

Реализуйте рекурсивную функцию findPrimitiveBox, которая принимает на вход
"коробку" (пару), находит внутри нее пару без вложенных пар (как описано выше) и
возвращает наружу
*/

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

const findPrimitiveBox = (pair) => {
  if (car(pair) === null && isObject(cdr(pair))) {
    return findPrimitiveBox(cdr(pair));
  } if (cdr(pair) === null && isObject(car(pair))) {
    return findPrimitiveBox(car(pair));
  }
  return pair;
};

const pair5 = cons(
  cons(null, cons(1, 5)),
  null,
);
console.log(toString(findPrimitiveBox(pair5))); // (1, 5)
