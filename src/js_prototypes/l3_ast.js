import { find, identity } from 'lodash'; // eslint-disable-line

/*  >>>>>  EX  <<<<<
Текущая версия htmlBuilder должна уметь работать с одиночными тегами.
Список тегов, которые являются одиночными, находится в singleTagsList.

// <br>              ----------> ['br'];
// <img src="/path"> ----------> ['img', { src: '/path' }];

Реализуйте и экспортируйте функции `parse` и `render`.
* Функция `render` принимает на вход ast и возвращает строковое представление.
* Функция `parse` принимает на вход исходную структуру и возвращает представление в виде ast.

// Пример (перенесен в раздел TESTING).

    ПОДСКАЗКИ:
1. В начале файла импортирована функция find библиотеки lodash
2. Эту задачу можно решить практически без единой условной конструкции используя
полиморфизм на основе объекта (ключ, значения).

Решение учителя может повергнуть вас в шок. Оно не содержит ничего нового по
сравнению с тем что вы проходили, но по максимуму использует пройденные идеи,
функции высшего порядка, неизменяемость, полиморфизм. Потратьте время, разберитесь с ним.
*/

const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)

// END

/* TESTING */
// const data = ['html', [
//   ['meta', { id: 'uniq-key' }, [
//     ['title', 'hello, hexlet!'],
//   ]],
//   ['body', [
//     ['br'],
//   ]],
// ]];
//
// const ast = parse(data);
/*
{ name: 'html', attributes: {}, body: '', children: [
  { name: 'meta', attributes: { id: 'uniq-key' }, body: '', children: [
    { name: 'title', attributes: {}, body: 'hello, hexlet!', children: [] },
  ]},
  { name: 'body', attributes: {}, body: '', children: [
    { name: 'br', attributes: {}, body: '', children: [] },
  ]},
]}
*/
