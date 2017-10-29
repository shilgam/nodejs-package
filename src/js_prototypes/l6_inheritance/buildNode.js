import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

const singleTagsList = new Set(['hr', 'img', 'br']);

const buildNode = (name, ...args) => {
  const C = (singleTagsList.has(name)) ? SingleTag : PairedTag;
  return new C(name, ...args);
};
export default buildNode;
