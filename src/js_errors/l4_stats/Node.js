import Stats from './Stats'; // eslint-disable-line

// BEGIN (write your solution here)
export default class Node {
  constructor(name, type) {
    this.name = name;
    this.stats = new Stats(type);
  }

  getName() {
    return this.name;
  }

  getStats() {
    return this.stats;
  }
}
// END

/* DEBUG */
// const node = new Node('/');
//
// console.log(`name: ${node.getName()}`); // '/'
// console.log(`obj : ${JSON.stringify(node)}`); // {"name":"/","stats":{}}
