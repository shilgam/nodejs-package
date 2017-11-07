// BEGIN (write your solution here)
import Node from './Node';

function toString(node) {
  const content = (node.children.length === 0) ?
    node.body : node.children.map(child => child.toString()).join('');
  return () => `<${node.name}${node.getAttributesAsLine()}>${content}</${node.name}>`;
}

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
  this.toString = toString(this);
}
// END

/* DEBUG */
// const tag = new PairedTag('meta', { id: 'uniq-key' }, [
//   ['title', 'hello, hexlet!'],
// ]);
// console.log(`> > > > > tag: ${tag}`);
