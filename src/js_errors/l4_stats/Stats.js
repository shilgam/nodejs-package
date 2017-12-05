// BEGIN (write your solution here)
export default class Stats {
  constructor(file, directory) {
    this.file = file;
    this.directory = directory;
  }

  isFile() {
    return this.file;
  }

  isDirectory() {
    return this.directory;
  }
}
// END

/* DEBUG */
// const myStat = new Stats('file', 'dir');
// console.log(`file:   ${myStat.isFile()}`);
// console.log(`dir :   ${myStat.isDirectory()}`);
