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
  hasChildren() {
    return (this.children.size > 0);
  }

  hasChild(key) {
    return this.children.has(key);
  }

  getParent() {
    return this.parent;
  }

  removeChild(key) {
    this.children.delete(key);
    return this;
  }

  getChildren() {
    return [...this.children].map(elem => elem[1]);
  }

  getDeepChild(keys) {
    if ([...keys].length === 0) {
      return undefined;
    } return [...keys].reduce((accum, key) =>
        ((accum === undefined) ? undefined : accum.getChild(key)), this);
  }

  toString() {
    return ` { "${this.key}", [${this.getChildren().map(node => node.toString())}] } `;
  }
  // END
}

export default Tree;

/* DEBUG */
// const tree = new Tree('/');
// tree.addChild('var')
//   .addChild('lib')
//   .addChild('run');
// tree.addChild('etc');
// tree.addChild('home');

/* #toString */
// console.log(`>>>>    tree: ${tree}`);

/* #hasChildren */
// console.log(tree.hasChildren()); // true
// const emptyTree = new Tree('/');
// console.log(emptyTree.hasChildren()); // false

/* #hasChild */
// console.log(tree.hasChild('/')); // false
// console.log(tree.hasChild('etc')); // true

/* #getParent */
// const subtree = tree.getChild('var');
// console.log(subtree.getParent()); // tree;

/* #removeChild */
// const subtree = tree.getChild('var');
// console.log(subtree.hasChildren()); // true
// if (subtree) {
//   subtree.removeChild('lib');
// }
// console.log(subtree.hasChildren()); // false

/* #getChildren */
// const dirs = tree.getChildren().map(child => child.getKey());
// console.log(dirs); // ['var', 'etc', 'home'])

/* #getDeepChild */
// const subtree = tree.getDeepChild(['var', 'lib']);
// console.log(subtree.getKey()); // lib

/* #getDeepChild undefined */
// const subtree = tree.getDeepChild(['var', 'lib', 'one', 'two']);
// console.log(subtree); // undefined

// const subtree02 = tree.getDeepChild([]);
// console.log(subtree02); // undefined
