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
*/

// BEGIN (write your solution here)

// END

export default class {
  constructor() {
    this.tree = new Tree('/', { type: 'dir' });
  }

  // BEGIN (write your solution here)

  // END

  findNode(filepath) {
    const parts = getPathParts(filepath);
    return parts.length === 0 ? this.tree : this.tree.getDeepChild(parts);
  }
}

/* DEBUG */
// files.isDirectory('/etc'); // false
//
// files.mkdirSync('/etc');
// files.isDirectory('/etc'); // true
//
// files.mkdirSync('/etc/nginx');
// files.isDirectory('/etc/nginx'); // true
//
// files.isFile('/file.txt'); // false
//
// files.touchSync('/file.txt');
// files.isFile('/file.txt'); // true
