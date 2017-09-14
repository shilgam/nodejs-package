import { make, numer, denom, toString } from './l8_base';

/*
Реализуйте абстракцию для работы с рациональными числами, используя пары:

* Конструктор make(numer, denom).
* Селекторы numer (числитель) и denom (знаменатель).
* Функцию toString, возвращающую строковое представление рационального числа.
  Например для дроби 3/4 созданной так make(3, 4), строковым представлением будет 3 / 4.
* Предикат isEqual, проверяющую равенство двух рациональных чисел.
  Например isEqual(make(1, 2), make(2, 4)).
* Функцию add, выполняющую сложение дробей.
* Функцию sub, выполняющую вычитание дробей.
* Функцию mul, выполняющую умножение дробей.
* Функцию div, выполняющую деление дробей.
* Экспортируйте созданные функции.

Обратите внимание, что результатом любой арифметической операции над
рациональным числом будет рациональное число.
*/

export const add = (rat1, rat2) => {
  const n1 = numer(rat1);
  const n2 = numer(rat2);
  const d1 = denom(rat1);
  const d2 = denom(rat2);
  return make(((n1 * d2) + (n2 * d1)), d1 * d2);
};

export const sub = (rat1, rat2) => {
  const n1 = numer(rat1);
  const n2 = numer(rat2);
  const d1 = denom(rat1);
  const d2 = denom(rat2);
  return make(((n1 * d2) - (n2 * d1)), d1 * d2);
};

export const mul = (rat1, rat2) => {
  const n1 = numer(rat1);
  const n2 = numer(rat2);
  const d1 = denom(rat1);
  const d2 = denom(rat2);
  return make(n1 * n2, d1 * d2);
};

export const div = (rat1, rat2) => {
  const n1 = numer(rat1);
  const n2 = numer(rat2);
  const d1 = denom(rat1);
  const d2 = denom(rat2);
  return make(n1 * d2, d1 * n2);
};

export const isEqual = (rat1, rat2) => {
  const n1 = numer(rat1);
  const n2 = numer(rat2);
  const d1 = denom(rat1);
  const d2 = denom(rat2);
  return n1 * d2 === n2 * d1;
};

// const rat1 = make(2, 3);
// const rat12 = make(4, 6);
// const rat2 = make(7, 2);
// toString(rat12); // '4 / 6'
// console.log(isEqual(rat1, rat12)); // true
// console.log(toString(add(rat1, rat2))); // 25/6
// console.log(toString(sub(rat2, rat1))); // 17/6
// console.log(toString(mul(rat1, rat2))); // 14/6
// console.log(toString(div(rat1, rat2))); // 4/21
