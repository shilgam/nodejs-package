import Stats from './Stats'; // eslint-disable-line

// BEGIN (write your solution here)
export default class Node {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getStats() {
    return new Stats(this.isFile(), this.isDirectory());
  }
}
// END

/* DEBUG */
// const node = new Node('/');
// console.log(`name: ${node.getName()}`);
// console.log(`obj : ${JSON.stringify(node)}`);
