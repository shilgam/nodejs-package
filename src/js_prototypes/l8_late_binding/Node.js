// BEGIN (write your solution here)
function getAttributesAsLine() {
  return Object.keys(this.attributes)
    .map(key => ` ${key}="${this.attributes[key]}"`).join('');
}

export default function Node(name, attributes) {
  this.name = name;
  this.attributes = attributes;
  this.getAttributesAsLine = getAttributesAsLine;
}
// END

/* DEBUG */
// const node = new Node('meta', { id: 'uniq-key' });
// console.log(`> > > > > node: ${JSON.stringify(node)}`);
// console.log(`> > > > > node: ${node}`);
// console.log(`> > > > > getAttributesAsLine: ${node.getAttributesAsLine()}`);
