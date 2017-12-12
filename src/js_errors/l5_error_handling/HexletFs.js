import path from 'path';
import Tree from 'hexlet-trees'; // eslint-disable-line
import { Dir, File } from 'hexlet-fs'; // eslint-disable-line


const getPathParts = filepath =>
  filepath.split(path.sep).filter(part => part !== '');

export default class HexletFs {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(filepath) {
    const current = this.findNode(filepath);
    if (!current) {
      return null;
    }
    return current.getMeta().getStats();
  }

  mkdirSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent || parent.getMeta().getStats().isFile()) {
      return false;
    }
    return parent.addChild(base, new Dir(base));
  }

  // BEGIN (write your solution here)
  touchSync(filepath) {
    const parts = getPathParts(filepath);
    const parent = this.tree.getDeepChild(parts.slice(0, -1));

    if (!parent || !parent.getMeta().getStats().isDirectory()) {
      return false;
    }

    const fileName = parts.slice(-1)[0];
    parent.addChild(fileName, new File(fileName));
    return true;
  }

  mkdirpSync(dirPath) {
    const parts = getPathParts(dirPath);
    return parts.reduce((acc, part) => {
      if (!acc) {
        return false;
      }
      const current = acc.getChild(part);

      if (!current) {
        return acc.addChild(part, new Dir(part));
      }

      if (current.getMeta().getStats().isFile()) {
        return false;
      }

      return current;
    }, this.tree);
  }

  readdirSync(dirPath) {
    const parts = getPathParts(dirPath);
    const child = parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);

    if (!child || !child.getMeta().getStats().isDirectory()) {
      return false;
    }
    return child.getChildren().map(children => children.getMeta().name);
  }

  rmdirSync(dirPath) {
    const parts = getPathParts(dirPath);
    const child = parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);

    if (!child || !child.getMeta().getStats().isDirectory() || child.getChildren().length !== 0) {
      return false;
    }
    const parent = this.tree.getDeepChild(parts.slice(0, -1));
    const fileName = parts.slice(-1)[0];
    return parent.removeChild(fileName);
  }
  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}

/* DEBUG */
// const files = new HexletFs();

/* #touchSync */
// files.mkdirSync('/shared');
// console.log(files.touchSync('/shared/file.txt')); // true // TODO: fix root dir
// console.log(files.touchSync('/shared/file.txt/file2.txt')); // fasle

/* #mkdirpSync */
// console.log(files.mkdirpSync('/usr/admin/docs')); // true (?)
// files.mkdirSync('/libs');
// files.touchSync('/libs/file.txt');
// console.log(files.mkdirpSync('/libs/file.txt/wrong')); // false

/* #readdirSync */
// files.mkdirSync('/files');
// files.mkdirSync('/files/apps');
// files.mkdirSync('/files/apps/opt');
// files.mkdirSync('/files/apps/fake');
// console.log(files.readdirSync('/files/apps')); // ['opt', 'fake']

/* rmdirSync */
// files.mkdirSync('/temp');
// files.mkdirSync('/temp/base');
// console.log(files.readdirSync('/temp')); // ['base']
// files.rmdirSync('/temp/base');
// console.log(files.readdirSync('/temp')); // []
// console.log(files.rmdirSync('/temp/base')); // false
