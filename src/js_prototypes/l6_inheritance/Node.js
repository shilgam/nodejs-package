// BEGIN (write your solution here)
export default class Node {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes)
      .map(key => ` ${key}="${this.attributes[key]}"`).join('');
  }
}
// END
