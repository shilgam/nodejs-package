import path from 'path';
import Tree from 'hexlet-trees'; // eslint-disable-line

/* >>>>>  EX  <<<<<
Файловая система должна корректно обрабатывать пустые пути, делая внутри
нормализацию. То есть, если ей передать путь `///etc/config//my///`, то он
транслируется в `/etc/config/my`.

Реализуйте следующие части интерфейса типа HexletFs.
  * isDirectory(path)
  * isFile(path)
  * mkdirSync(path)
  * touchSync(path) - создает пустой файл. На самом деле, в реальной файловой
  системе, команда touch меняет время последнего обращения к файлу, а побочным
  эффектом этой команды является создание файла в случае его отсутствия.
  По этой причине данной командой часто пользуются для создания файлов.

    ПРИМЕРЫ (см. раздел DEBUG)

    ПОДСКАЗКИ:
1. Реализуйте функцию getPathParts, которая разбивает путь на массив имен.
Без этой функции не будет работать метод findNode, осуществляющий глубокий
поиск файла (каталога) внутри текущего каталога.

2. Для работы с путями используйте возможности встроенного в Node.js модуля Path

3. DOCS:
  * hexlet-trees: https://github.com/hexlet-components/js-trees/tree/master/docs
  * path: https://nodejs.org/api/path.html
*/

// BEGIN (write your solution here)
const getPathParts = filepath =>
  filepath.split(path.sep).filter(el => el !== '');
// END

export default class HexletFs {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  // BEGIN (write your solution here)
  isDirectory(filepath) {
    const current = this.findNode(filepath);
    return current && current.getMeta().type === 'dir';
  }

  mkdirSync(filepath) {
    const { dir, base } = path.parse(filepath);
    return this.findNode(dir).addChild(base, { type: 'dir' });
  }

  isFile(filepath) {
    const current = this.findNode(filepath);
    return current && current.getMeta().type === 'file';
  }

  touchSync(filepath) {
    const { dir, base } = path.parse(filepath);
    return this.findNode(dir).addChild(base, { type: 'file' });
  }
  // END

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
