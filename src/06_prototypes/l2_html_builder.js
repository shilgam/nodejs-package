import _ from 'lodash'; // eslint-disable-line

/*  >>>>>  EX  <<<<<
Реализуйте и экспортируйте по умолчанию функцию buildHtml, которая возвращает
строковое представление html.

// Пример использования (перенесен в раздел TESTING).

    ПОДСКАЗКИ:
* Для объединения массива в строку, используйте метод `join(separator)`.
*/

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

const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));

const buildAttrString = attrs =>
  Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');

const buildHtml = (data) => {
  const [first, ...rest] = data;
  const root = { name: first, attributes: {}, body: '', children: [] };
  const tag = rest
    .reduce((acc, arg) => {
      const { name } = getPropertyAction(arg);
      return { ...acc, [name]: arg };
    }, root);

  return [`<${tag.name}${buildAttrString(tag.attributes)}>`,
    `${tag.body}${tag.children.map(buildHtml).join('')}`,
    `</${tag.name}>`,
  ].join('');
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
