# Content

Course: https://ru.hexlet.io/courses/js_collections

Этот курс посвящен конкретным приемам в работе с коллекциями, которые используются в языке JavaScript, а также изучению основных типов данных:
* массивов,
* ассоциативных массивов и
* множеств.

В течение курса изучаются темы:
* техники мемоизации,
* ленивых вычислений,
* использования функций высшего порядка,
* так называемых spread- и rest-операций и
* техник разрушающих присваиваний.

Сначала рекомендуем пройти курс: "JS: Программирование, управляемое данными" ('js_data_driven_programming')

## Lesson 8
### Создание динамических свойств

Проблема: Как определять длину массива immutable коллекции (for Lazy Evaluation)?
Как реализовать такое свойство объекта?

```js
class Enumerable {
  get length() {
    return ...
  }
}

const result = coll;
  .where(car => car.brand === 'kia')
  .where(car => car.year > 2011);

result.length; // 2
```

Solution in js -- getter

Есть проблема: вычисления произвродятся заново при каждом запуске `result.length;` и `result.toArray();`

### Паттерн мемоизация
Мемоизация -- сохранение результатов выполнения Функций для предотвращения повторных вычислений.

```js
methodName() {
  if (!this.memo) {
    this.memo = ...;
  }
  return this.memo;
}

methodName();
methodName(); // memo
```
## Lesson 9. Операция REST

```js
const fn = (a, b, ...args) => {
  console.log(a);
  console.log(b);
  console.log(args);
};

fn('first');
// first
// undefined
// []
```

## Lesson 10. Операция SPREAD
Оператор расширения позволяет расширять выражения в тех местах, где предусмотрено использование нескольких аргументов (при вызовах функции) или ожидается несколько элементов (для массивов).

1. Применение к массивам. (Immutable REDUCE)
```js
const arr = [1, 2, 3];
arr.reduce(accum, value) => [accum, value, value], []);
// [1, 1, 2, 2, 3, 3]
```

2. Применение к объектам.
    ```js
const obj = { key: 'value' };
console.log({ ...obj, port: 80 });
// { key: 'value', port: 80 }
```
