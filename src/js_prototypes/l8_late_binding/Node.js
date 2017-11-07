// BEGIN (write your solution here)
function getAttributesAsLine(node) {
  return Object.keys(node.attributes)
    .map(key => ` ${key}="${node.attributes[key]}"`).join('');
}

export default function Node(name, attributes) {
  this.name = name;
  this.attributes = attributes;
  this.getAttributesAsLine = () => getAttributesAsLine(this);
}
// END

/* DEBUG */
// const node = new Node('meta', { id: 'uniq-key' });
// console.log(`> > > > > node: ${JSON.stringify(node)}`);
// console.log(`> > > > > node: ${node}`);
// console.log(`> > > > > getAttributesAsLine: ${node.getAttributesAsLine()}`);
