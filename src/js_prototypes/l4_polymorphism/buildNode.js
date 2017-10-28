import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

// BEGIN (write your solution here)
const singleTagsList = new Set(['hr', 'img', 'br']);

const buildNode = (name, ...args) => {
  const C = (singleTagsList.has(name)) ? SingleTag : PairedTag;
  return new C(name, ...args);
};
export default buildNode;
// END

/* DEBUG */
// const tag = buildNode('meta', { id: 'uniq-key' }, 'text', [
//   buildNode('img', { class: 'image', href: '#' }, '', []),
// ]);
// console.log(`> > > > > tag: ${tag}`);
