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
const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
  },
];

const getPropertyAction = arg => find(propertyActions, ({ check }) => check(arg));

export const parse = (data) => {
  const [first, ...rest] = data;
  const root = { name: first, attributes: {}, body: '', children: [] };
  return rest.reduce((acc, attr) => {
    const key = getPropertyAction(attr).name;
    const val = (key === 'children') ? attr.map(child => parse(child)) : attr;
    return { ...acc, [key]: val };
  }, root);
};

export const render = ({ name, body, children, attributes }) => {
  const closeName = (singleTagsList.has(name)) ? '' : `</${name}>`;
  const attrLine = Object.keys(attributes)
    .map(key => ` ${key}="${attributes[key]}"`).join('');
  const content = (children.length === 0) ? body : children.map(render).join('');
  return `<${name}${attrLine}>${content}${closeName}`;
};
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
// console.log(`> > > > >           ast: ${JSON.stringify(ast, null, 2)}`);
// const rendered = render(ast);
// console.log(`> > > > > rendered html: ${rendered}`);
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
