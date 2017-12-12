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
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);

    if (!parent || !parent.getMeta().getStats().isDirectory()) {
      return false;
    }

    parent.addChild(base, new File(base));
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
    const child = this.findNode(dirPath);
    if (!child || !child.getMeta().getStats().isDirectory()) {
      return false;
    }
    return child.getChildren()
      .map(children => children.getMeta().getName());
  }

  rmdirSync(dirPath) {
    const { base } = path.parse(dirPath);
    const curr = this.findNode(dirPath);

    if (!curr || !curr.getMeta().getStats().isDirectory() || curr.getChildren().length !== 0) {
      return false;
    }
    return curr.getParent().removeChild(base);
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
