import path from 'path';
import errors from 'errno'; // eslint-disable-line
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
      return [null, errors.code.ENOENT];
    }
    return [current.getMeta().getStats(), null];
  }

  // BEGIN (write your solution here)
  writeFileSync(filepath, content) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);

    if (!parent) {
      return [null, errors.code.ENOENT];
    }
    const child = parent.getChild(base);

    if (child && child.getMeta().isDirectory()) {
      return [null, errors.code.EISDIR];
    }
    return [parent.addChild(base, new File(base, content)), null];
  }

  readFileSync(filepath) {
    const current = this.findNode(filepath);

    if (!current) {
      return [null, errors.code.ENOENT];
    }
    if (current.getMeta().isDirectory()) {
      return [null, errors.code.EISDIR];
    }
    return [current.getMeta().getBody(), null];
  }

  unlinkSync(filepath) {
    const current = this.findNode(filepath);

    if (!current) {
      return [null, errors.code.ENOENT];
    }
    if (current.getMeta().isDirectory()) {
      return [null, errors.code.EPERM];
    }
    return [current.getParent().removeChild(current.getKey()), null];
  }
  // END

  mkdirpSync(filepath) {
    const iter = (parts, subtree) => {
      if (parts.length === 0) {
        return [subtree, null];
      }
      const [part, ...rest] = parts;
      const current = subtree.getChild(part);
      if (!current) {
        return iter(rest, subtree.addChild(part, new Dir(part)));
      }
      if (current.getMeta().isFile()) {
        return [null, errors.code.ENOTDIR];
      }

      return iter(rest, current);
    };
    const parts = getPathParts(filepath);
    return iter(parts, this.tree);
  }

  touchSync(filepath) {
    const { base, dir } = path.parse(filepath);
    const parent = this.findNode(dir);
    if (!parent) {
      return [null, errors.code.ENOENT];
    }
    if (parent.getMeta().isFile()) {
      return [null, errors.code.ENOTDIR];
    }
    return [parent.addChild(base, new File(base, '')), null];
  }

  readdirSync(filepath) {
    const dir = this.findNode(filepath);
    if (!dir) {
      return [null, errors.code.ENOENT];
    } else if (dir.getMeta().isFile()) {
      return [null, errors.code.ENOTDIR];
    }
    return [dir.getChildren().map(child => child.getKey()), null];
  }

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}
/* DEBUG */
// const files = new HexletFs();
// files.mkdirpSync('/etc');
// files.mkdirpSync('/opt');
// files.touchSync('/opt/file.txt');
// files.mkdirpSync('/etc/nginx/conf.d');

/* #writeFileSync */
// const [data, err] = files.writeFileSync('/etc/unknown/file', 'body');
// console.log(data); // null
// console.log(err.code); // 'ENOENT'

// const [data2, err2] = files.writeFileSync('/etc', 'body');
// console.log(data2); // null
// console.log(err2.code); // 'EISDIR'

/* #readFileSync */
// files.writeFileSync('/etc/nginx/nginx.conf', 'directives');
// const [data, err] = files.readFileSync('/etc/nginx/nginx.conf');
// console.log(`output: ${data}`); // 'directives'
// console.log(`output: ${err}`); // null

/* #unlinkSync */
// files.writeFileSync('/etc/nginx/nginx.conf', 'directives');
// files.unlinkSync('/etc/nginx/nginx.conf');
// const [data, err] = files.readdirSync('/etc/nginx');
// console.log(err); // null
// console.log(data); // ['conf.d']
//
// const [data2, err2] = files.unlinkSync('/etc/nginx');
// console.log(data2); // null
// console.log(err2.code); // 'EPERM'
