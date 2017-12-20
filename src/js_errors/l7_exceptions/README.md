__HexletFs.js__

Реализуйте функцию `copySync(src, dest)`, которая копирует файл из `src` в `dest`.

* Если `dest` это путь до папки, то имя файла берется из `src`
* Если `dest` это путь до файла (существующего или нет), то его содержимое становится равным `src`

Возможные ошибки:

* EISDIR - возникает в случае, если `src` это директория, а не файл
* ENOENT - возникает в случае, если `src` не существует, а так же возникает в случае, если не существует директорий по пути `dest` (копирование не создает директорий)

__DOCS:__
* hexlet-trees:  https://github.com/hexlet-components/js-trees/tree/master/docs

* hexlet-fs:  https://github.com/hexlet-components/js-fs/tree/master/docs
