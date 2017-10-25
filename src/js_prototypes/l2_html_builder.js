import _ from 'lodash'; // eslint-disable-line

/*  >>>>>  EX  <<<<<
Реализуйте и экспортируйте по умолчанию функцию buildHtml, которая возвращает
строковое представление html.

// Пример использования (перенесен в раздел TESTING).

    ПОДСКАЗКИ:
* Для объединения массива в строку, используйте метод `join(separator)`.
*/

// BEGIN (write your solution here)
const buildHtml = (tag) => {

  const iter = (chain, accum) => {
    const tagName = chain[0];
    let attributes = '';
    const tail = chain.slice().splice(1);
    const newTail = tail.map((el) => {
      if (typeof el === 'string') {
        return el;
      } else if (el instanceof Array) {
        const children = el.map(child => iter(child, []));
        return children.join('');
      } else if (el instanceof Object) {
        const keys = Object.keys(el);
        const attr = keys.map(key => `${key}="${el[key]}"`).join(' ');
        attributes = ` ${attr}`;
      }
      return null; // TO DO
    });
    return `<${tagName}${attributes}>${newTail.join('')}</${tagName}>`;
  };
  return iter(tag, []);
};
export default buildHtml;
// END

/* TESTING */
// const data = ['html', [
//   ['meta', [
//     ['title', 'hello, hexlet!'],
//   ]],
//   ['body', { class: 'container' }, [
//     ['h1', { class: 'header' }, 'html builder example'],
//     ['div', [
//       ['span', 'span text2'],
//       ['span', 'span text3'],
//     ]],
//   ]],
// ]];
//
// console.log(buildHtml(data));
/*  <html>
      <meta><title>hello, hexlet!</title></meta>
      <body class="container">
        <h1 class="header">html builder example</h1>
        <div>
          <span>span text2</span>
          <span>span text3</span>
        </div>
      </body>
    </html> */
