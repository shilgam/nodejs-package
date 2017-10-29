// BEGIN (write your solution here)
import Node from './Node';

export default class SingleTag extends Node {
  constructor(name, attributes = {}, body = '', children = []) {
    super(name, attributes, body, children);
  }

  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }
}
// END
