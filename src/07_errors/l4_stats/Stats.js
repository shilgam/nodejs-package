// BEGIN (write your solution here)
export default class Stats {
  constructor(type) {
    this.type = type;
  }

  isFile() {
    return this.type === 'file';
  }

  isDirectory() {
    return this.type === 'dir';
  }
}
// END

/* DEBUG */
// const fileStat = new Stats('file');
// console.log(fileStat.isFile()); // true
// console.log(fileStat.isDirectory()); // false
//
// const dirStat = new Stats('dir');
// console.log(dirStat.isFile()); // false
// console.log(dirStat.isDirectory()); // true
