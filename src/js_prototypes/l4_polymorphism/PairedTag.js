// BEGIN (write your solution here)
export default class PairedTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString() {
    const content = (this.children.length === 0) ? this.body : this.children.map(child => child.toString()).join('');
    return `<${this.name}${this.getAttributesAsLine()}>${content}</${this.name}>`;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes)
      .map(key => ` ${key}="${this.attributes[key]}"`).join('');
  }
}
// END

/* DEBUG */
// const tag = new PairedTag('meta', { id: 'uniq-key' }, 'text', []);
// console.log(`> > > > > tag: ${tag}`);
