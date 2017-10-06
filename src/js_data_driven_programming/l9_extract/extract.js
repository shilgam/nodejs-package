import { toString as listToString, l, map } from 'hexlet-pairs-data'; // eslint-disable-line
import { make, getAttribute, getName } from './tags';

/*  >>>>>  EX  <<<<<
  В HTML, некоторые элементы хранят ссылку в атрибуте href, а некоторые в src. Например:

    <img src="/logo.jpg">
    <link href="/style.css">
    <a href="/">

  Абстракция Tags содержит интерфейс для представления тега HTML:

    const hr = make('hr');
    const a = make('a', { href: '/' });

    getName(a); // => a
    getAttribute('href', a); // => /
    getAttribute('notexist', a); // => undefined

        extract.js
  Реализуйте и экспортируйте по умолчанию функцию extract, которая принимает
  на вход список тегов (только <a>, <link> и <img>) и возвращает список ссылок
  извлеченных из этих тегов.

    const tags = l(
      make('a', { href: '/about' }),
      make('img', { src: '/avatar.jpeg' }),
      make('link', { href: '/favicon.ico' }),
    );

    extract(tags); // => ('/about', '/avatar.jpeg', '/favicon.ico')

        ПОДСКАЗКИ
  * Воспользуйтесь функцией map для обхода коллекции
  * В коде не должно быть условных конструкций и, в целом, любых логических
  выражений. Используйте полиморфизм на основе ключей в объекте.
*/

// BEGIN (write your solution here)

const getAttrName = (tag) => {
  const attributes = tag.attributes;
  return Object.keys(attributes)[0];
};

const extract = (tags) => {
  const getAttrBody = (tag) => {
    const attrName = getAttrName(tag);
    return getAttribute(attrName, tag);
  };
  return map(getAttrBody, tags);
};
export default extract;

// // Testing
// const tags = l(
//   make('a', { href: '/about' }),
//   make('img', { src: '/avatar.jpeg' }),
//   make('link', { href: '/favicon.ico' }),
// );
// console.log(`>>>>> ${listToString(extract(tags))}`);
