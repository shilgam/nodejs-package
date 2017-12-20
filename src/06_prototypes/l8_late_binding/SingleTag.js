// BEGIN (write your solution here)
import Node from './Node';

function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
}

export default function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
  this.toString = toString;
}
// END

/* DEBUG */
// const tag = new SingleTag('img', { class: 'image', href: '#' }, '', []);
// console.log(`> > > > > tag: ${tag}`);
