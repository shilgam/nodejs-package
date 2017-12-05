/* eslint-disable class-methods-use-this */
import Node from './Node'; // eslint-disable-line

// BEGIN (write your solution here)
export default class Dir extends Node {
  constructor(name) {
    super(name, 'dir');
  }
}
// END

/* DEBUG */
// const myFSys = new Dir('/');
//
// console.log(`name:       ${myFSys.getName()}`);
// console.log(`object:     ${JSON.stringify(myFSys)}`); // {"name":"/","stats":{"type":"dir"}}
