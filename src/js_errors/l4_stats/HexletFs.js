import path from 'path';
import Tree from 'hexlet-trees'; // eslint-disable-line

// import Dir from './Dir';
// import File from './File';

const getPathParts = filepath =>
  filepath.split(path.sep).filter(part => part !== '');

export default class HexletFs {
  constructor() {
    // this.tree = new Tree('/', new Dir('/'));
    this.tree = new Tree('/', { type: 'dir' });
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    return current.getMeta().getStats();
  }

  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    // return this.findNode(dir).addChild(base, new File(base));
    return this.findNode(dir).addChild(base, { type: 'file' });
  }

  mkdirSync(filepath) {
    const { dir, base } = path.parse(filepath);
    // return this.findNode(dir).addChild(base, new Dir(base));
    return this.findNode(dir).addChild(base, { type: 'dir' });
  }

  isDirectory(filepath) {
    const current = this.findNode(filepath);
    return current && current.getMeta().type === 'dir';
  }

  isFile(filepath) {
    const current = this.findNode(filepath);
    return current && current.getMeta().type === 'file';
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}

/* DEBUG */
// const files = new HexletFs();
//
// console.log(`isDirectory?  ${files.isDirectory('/etc')}`); // false
// files.mkdirSync('/etc');
// console.log(`isDirectory?  ${files.isDirectory('/etc')}`); // true
//
// files.mkdirSync('/etc/nginx');
// console.log(`isDirectory?  ${files.isDirectory('/etc/nginx')}`); // true
//
// files.touchSync('/etc/file.txt');
// console.log(`isFile?  ${files.isFile('/etc/file.txt')}`); // true
