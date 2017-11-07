// BEGIN (write your solution here)
import Node from './Node';

function toString() {
  const content = (this.children.length === 0) ?
    this.body : this.children.map(child => child.toString()).join('');
  return `<${this.name}${this.getAttributesAsLine()}>${content}</${this.name}>`;
}

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
  this.toString = toString;
}
// END

/* DEBUG */
// const tag = new PairedTag('meta', { id: 'uniq-key' }, [
//   ['title', 'hello, hexlet!'],
// ]);
// console.log(`> > > > > tag: ${tag}`);
