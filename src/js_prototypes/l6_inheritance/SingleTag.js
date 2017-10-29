export default class SingleTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString() {
    const content = (this.children.length === 0) ? this.body : this.children.map(child => child.toString()).join('');
    return `<${this.name}${this.getAttributesAsLine()}>${content}`;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes)
      .map(key => ` ${key}="${this.attributes[key]}"`).join('');
  }
}
