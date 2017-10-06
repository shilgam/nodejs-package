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

const mapping = {
  img: t => getAttribute('src', t),
  a: t => getAttribute('href', t),
  link: t => getAttribute('href', t),

};

const extract = tags => map(tag => mapping[getName(tag)](tag), tags);
export default extract;

// END

// // Testing
// const tags = l(
//   make('a', { href: '/about' }),
//   make('img', { src: '/avatar.jpeg' }),
//   make('link', { href: '/favicon.ico' }),
// );
// console.log(`>>>>> ${listToString(extract(tags))}`);
