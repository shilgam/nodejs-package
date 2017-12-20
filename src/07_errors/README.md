# Content

Course: https://ru.hexlet.io/courses/js_errors

PACKAGES docs:

* [hexlet-fs](https://github.com/hexlet-components/js-fs/tree/master/docs)
* [hexlet-trees](https://github.com/hexlet-components/js-trees/tree/master/docs)

SUMMARY:

Ошибки являются неотъемемой частью ПО, и важно уметь с ними правильно работать.

Основные темы:
* Коды возврата,
* Исключения

Проект: Работа с файловой системой

Сначала рекомендуем пройти курс: "JS: Прототипы" (js_prototypes)

## Lesson 2: Деревья

__Файловая структура - дерево__

__Барьеры абстракции:__
* Задача 1: работа с деревьями
* Задача 2: построение файловой системы

## Lesson 3: Файловая система

## Lesson 4: Информация о файле

## Lesson 5: Обработка ошибок

__Какое поведение является ошибкой?__

Ex #1: Нахождение вхождения подстроки:
```js
'one two'.indexOf('one'); // 0
'one two'.indexOf('five'); // -1  --- not an issue
```

Ex #2: Возможные ошибки при удалении директории
* Директории не существует
* Передан не файл
* Директория не пустая
* Передана не строка

__Народная мудрость:__

"You throw an exception when your method is unable to do what it promises to" - Jeff Richter

__Типы ошибок:__

* Эксплуатационные -- ошибки времени выполнения, возникающие в корректных программах
* Ошибки программирования -- баги в программе

## Lesson 6: Коды ошибок

Ошибок файловой системы: более 100 (UNIX)

__Как возвращать результат?__

```js
const result = files.rmdir(path);

if ([/* error list */]).includes(result)) {
  // errors
} else {
  // success
}
```

* C style
Использование глобальной переменной

* Golang style (C style +)
Не используем глобальные переменные
```go
func main() {
  dat, err := ioutil.ReadFile("/tmp/dat")
  if e != nil {
    fmt.Println(err.Error())
  }
  fmt.Print(string(dat))
}
```

In JS (destructuring)
```js
const [data, err] = files.readFileSync('/unknown');
if (err === null) {
  // do smth with data
} else {
  // handle error
}

// return [null, errors.code.ENOENT];
```

## Lesson 7: Исключения
Исключения - мощный механизм для работы с ошибками в современных ЯП.

__Стек__ - стопка тарелок

Стек ошибки - результат вызовов

__Исключительная ситуация__

Def: Исключительная ситуация - критическая ошибка, после которого невозможно восстановление.


Синтаксис исключения в js:
```js
const g = () => undefinedFunc();
const f = () => g(); // внутри f() нет никакой обработки ошибок

try {
  f();
} catch (e) {
  console.log(e);
}
// ReferenceError: undefinedFunc is not defined
// at g (main.js:1:11)
// at f (main.js:2:17)
// at Object.<anonymous> (main.js:5:3)
// >> стек в обратном порядке
```

Исключения пробрасываются на самый верх до блока try-catch

* Этот код позволяет сократить неодходимость обработки вложенных вызовов

__Возбуждение исключения:__
Как возбуждать/кидать исключения?
```js
// const obj = new Error(message);
// throw obj;

statsSync(path) {
  const parts = getPathParts(path);
  const current = this.tree.getDeepChild(parts);
  if (!current) {
    const error = errors.code.ENOENT;
    throw new HexletFsError(error, path);
  }
  return current.getMeta().getStats();
}
```

__Эмпиричекое правило__

Нужно бросать исключение тогда, когда ваша функция неспособна выполнить то, что она обещает. -- Jeff Richter
