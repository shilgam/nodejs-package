/*  >>>>>  EX  <<<<< Tree.js
Реализуйте недостающие части интерфейса типа Tree.

    ПОДСКАЗКИ:
Реализуйте недостающие части интерфейса типа Tree.

* hasChildren()
* hasChild(key)
* getParent()
* removeChild(key)
* getDeepChild(keys)

Примеры использования (перенесены в раздел DEBUG).

ПОДСКАЗКИ:
метод getChildren возвращает масс.
*/

class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  // BEGIN (write your solution here)

  // END
}

export default Tree;

/* DEBUG */
// tree = new Tree('/');
// tree.addChild('var')
//   .addChild('lib')
//   .addChild('run');
// tree.addChild('etc');
// tree.addChild('home');
//
// // example: getDeepChild
// const subtree = tree.getDeepChild(['var', 'lib']);
// subtree.getKey(); // lib
//
// const parent = subtree.getParent();
// parent.getKey(); // var
//
// tree.removeChild('home'); // true
// tree.removeChild('nonexistentNode'); // false
