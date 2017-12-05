/* eslint-disable class-methods-use-this */
import Node from './Node'; // eslint-disable-line

// BEGIN (write your solution here)
export default class File extends Node {
  constructor(name, body) {
    super(name);
    this.body = body;
  }
  getBody() {
    return this.body;
  }

  isDirectory() {
    return false;
  }

  isFile() {
    return true;
  }
}
// END

/* DEBUG */
// const myFSys = new File('file1.txt');
//
// console.log(`name:       ${myFSys.getName()}`);
// console.log(`isFile():   ${myFSys.isFile()}`); // true
// console.log(`isDir():    ${myFSys.isDirectory()}`); // false
