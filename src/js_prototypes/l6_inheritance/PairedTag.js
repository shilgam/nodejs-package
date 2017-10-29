// BEGIN (write your solution here)
import Node from './Node';

export default class PairedTag extends Node {
  constructor(name, attributes = {}, body = '', children = []) {
    super(name, attributes, body, children);
  }

  toString() {
    const content = (this.children.length === 0) ?
      this.body : this.children.map(child => child.toString()).join('');
    return `<${this.name}${this.getAttributesAsLine()}>${content}</${this.name}>`;
  }
}
// END
