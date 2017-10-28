import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

// BEGIN (write your solution here)
const singleTagsList = new Set(['hr', 'img', 'br']);

const buildNode = (name, ...args) => {
  if (singleTagsList.has(name)) {
    return new SingleTag(name, ...args);
  } return new PairedTag(name, ...args);
};
export default buildNode;
// END

/* DEBUG */
// const tag = buildNode('meta', { id: 'uniq-key' }, 'text', [
//   buildNode('img', { class: 'image', href: '#' }, '', []),
// ]);
// console.log(`> > > > > tag: ${tag}`);
