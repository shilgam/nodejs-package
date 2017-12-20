/* eslint-disable class-methods-use-this */
import Node from './Node'; // eslint-disable-line

// BEGIN (write your solution here)
export default class File extends Node {
  constructor(name, body) {
    super(name, 'file');
    this.body = body;
  }
  getBody() {
    return this.body;
  }
}
// END

/* DEBUG */
// const myFSys = new File('text.txt');
//
// console.log(`name: ${myFSys.getName()}`); // text.txt
// console.log(`obj : ${JSON.stringify(myFSys)}`); // {"name":"text.txt","stats":{"type":"file"}}
