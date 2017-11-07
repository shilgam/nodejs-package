// BEGIN (write your solution here)
import Node from './Node';

function toString(node) {
  return () => `<${node.name}${node.getAttributesAsLine()}>`;
}

export default function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
  // this.toString = function toString() {
  //   return `<${this.name}${this.getAttributesAsLine()}>`;
  // };
  this.toString = toString(this);
}
// END

/* DEBUG */
// const tag = new SingleTag('img', { class: 'image', href: '#' }, '', []);
// console.log(`> > > > > tag: ${tag}`);
