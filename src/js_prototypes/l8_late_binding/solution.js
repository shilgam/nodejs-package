import _ from 'lodash'; // eslint-disable-line

import buildNode from './buildNode';

/*
В этом упражнении реализация наших типов (Node и ее подтипов) будет опираться на
следующие свойства js:
  * Функция это объект
  * Позднее связывание
  * Побочные эффекты (apply)

    >>>>>  EX 1  <<<<< Node.js
Реализуйте базовый тип Node используя подход описанный в видео.

    >>>>>  EX 2  <<<<< PairedTag.js, SingleTag.js
Реализуйте типы тегов как подтипы типа Node.

    ПОДСКАЗКИ:
При определении функции внутри конструктора есть одна деталь. Функция
создается каждый раз заново, а это ведет к двум проблемам:
  1. Лишний расход памяти. Ведь достаточно создать одну функцию и использовать ее повторно.
  2. Сравнение объектов даже в случае deepEqual будет давать false. Ведь функция
  это cобъект, а объекты друг другу не равны (даже если структура одинаковая),
  если это не один и тот же объект. А это сильно затрудняет проверки на
  равенство деревьев (или поддеревьев), а также делает крайне сложным тестирование.

По этим причинам функцию нужно описывать вне конструктора (выше в файле), а
внутри присваивать ее соответствующему свойству.
*/

const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
    process: _.identity,
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
    process: _.identity,
  },
];

const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));

const parse = (data) => {
  const args = data.slice(1)
    .reduce((acc, arg) => {
      const { name, process } = getPropertyAction(arg);
      return { ...acc, [name]: process(arg, parse) };
    }, { name: data[0], attributes: {}, body: '', children: [] });
  return buildNode(args.name, args.attributes, args.body, args.children);
};

export default parse;
