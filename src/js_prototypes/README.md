# Content

Course: https://ru.hexlet.io/courses/js_prototypes

В JS реализация ООП сильно отличается от многих подобных ЯП (java, ruby, python, ...).
JS больше соответствует классическому пониманию ООП, сформулированному Аланом Кеем.

В этом курсе познакомимся с этой моделью и научимся с ней работать.
Она основана на прототипах.

Показать все что скрыто:
* в языке нет классов
* класс это функция
* функция это обьект
* `this` не текущий объект

Основные темы:
* Иерархии типов
* Наследование
* Прототипы
* Позднее связывание

Дополнительные темы:
* Парсинг
* Абстрактное синтаксическое дерево

Проект
* Парсинг DSL

Сначала рекомендуем пройти курс: "JS: Коллекции"

## Lesson 3: Абстрактное синтаксическое дерево (AST)

Недостатки текущего решения (data --> html):
1. Исх. структура оптимизизована для написания, НО необходимо выполнять кучу проверок
2. Неудобное представление для обратного преобразования (html --> data)

**AST** - Дерево, использующееся для промежуточного представления исходных данных.

Преимущества AST:
1. Проще добавлять новые представления
2. Проще анализировать
3. Разделяй и влавствуй (про вынесение парсинга)

## Lesson 4: Полиморфизм подтипов
## Lesson 5: Иерерхия типов

__Классификация__ - осмысленный порядок вещей, явлений, разделение их на рановидности согласно каким-либо важным признакам.

Цели классификации:
* систематизация
* обобщение, ...

Пример классификации - Иерархия типов (from SICP)
* _Комплексные:_ -2 + √2i
* _Действительные:_ √2, √3, 4
* _Рациональные:_ 1/2, -5/3, 5
* _Целые:_ 1, 2, -5

Характеристики иерерхии типов:
* Отношение: Частный тип(Integer) - Общий тип (Rational)
* Подтипы "наследуют" поведение надтипов
* В операциях работающих с надтипами, всегда можно использовать подтип (после приведения)

__Наследование__ один из способов реализации иерархии типов:
```
Целые  <  Рациональные  <  Действительные
подтип        тип             надтип
```

__Принцип Лисков__ (SOLID) по Фаулеру:
* Функции, использующие базовый тип, должны иметь возможность использовать подтипы базового класса, не зная об этом.

ИЛИ:
* Предусловия не могут быть усилены в подклассе.
* Постусловия не могут быть ослаблены в подклассе.

Зачем?
* Системы типов не могут гарантировать корректность иерархии
*  Некорректное использование наследования может приводить к ошибкам
* Снижается модульность (текут абстракции)

Иерархия типов не всегда является деревьями (Множественное наследование):
<img align="left" width="400" src="https://user-images.githubusercontent.com/18242773/32147609-3801f174-bcfb-11e7-8e5a-68b16227c534.png">

Реальность:
* Множественные надтипы - боль
* Очень легко ошибиться
* Композиция вместо наследования

## Lesson 6: Наследование
* Это способ строить иерархии типов
* Не зависит от чуществования классов
* Чаще используется для сокращения дублирования

## Lesson 7: Функции как объекты

__Функция это объект:__

```js
const f = name => `hello, ${name}`;
typeof f // function

f instanceof Object; // true
f.length // 1 (# of args)
f.toString() // name => `hello, ${ name }`
f.wrongProperty; // undefined
```

__Класс это функция:__
```js
class Node {
  constructor(name) {
    this.name = name;
  }
}

console.log(typeof node);  // function
```

__Как определяется класс без класса?__
```js
// функция в развернутом представлении:
function Node(name) {
  this.name = name;
}

node = new Node('table');
node.name; // table

// Cтрелочные функции нельзя использовать с `new`:
new ((name) => { this.name = name; })
// TypeError: (name) => { this.name = name; }
// is not a constructor
```

__Контекст (this):__
```js
function Node(name) {
  this.name = name;
}

function New(Constructor, args) {
  const obj = {};
  Constructor.apply(obj, args);
  return obj;
}

const node = New(Node, ['table']);
node.name;
```

__apply vs call:__
```js
const sum = (a, b) => a + b;
sum.apply(null, [2, 3]); // 5
sum.call(null, 2, 3); // 5
```

## Lesson 8: Позднее связывание

Позднее связывание - когда `this` не связывается с конкретным объектом, а зависит от контекста, в котором мы его используем.

Демо особенностей работы работы `this`:
```js
function f(name) {
  this.name = name;
}

const obj1 = { setName: f };
const obj2 = { setName: f };

// объекты передаются по ссылке (функция это объект),
// поэтому в obj1 и obj2 одна и та же функция:
console.log(obj1.setName === obj2.setName); // true

obj1.setName('martin');
obj2.setName('mike');

console.log(obj1);
console.log(obj2);
// { setName: [Function: f], name: 'martin' }
// { setName: [Function: f], name: 'mike' }
// Функция была одна и та же, но контекст был разным
```

Стрелочные функции сильно отличаются от именованных функций. Главное отличие - работа с `this`.

* __Именованные функции__:

`this` в именованных функциях зависит от контекста где мы его используем (Позднее связывание).

```js
const makeNode = (name) => {
  return {
    name, // name: name
    getName() { // getName: function getName {...} }
      return this.name;
    },
  };
};

const obj = makeNode('table');
obj; // { name: 'table', getName: [Function: getName] }

/* CASE 1: Вызов в контексте объекта */
obj.getName(); // table

/* CASE 2: Вызов без контекста */
const func = obj.getName;
func();
// TypeError: Cannot read property
// 'name' of undefined
```

* __Стрелочные функции__:

`this` в стрелочных функциях связывается жестко (раннее связывание)

```js
const makeNode = (name) => {
  // this = undefined
  return {
    name,
    getName: () => {
      // `this` равен `this`у внешнего окружения (makeNode)
      return this.name;
    },
  };
};

const obj = makeNode('table');

obj; // { name: 'table', getName: [Function: getName] }
obj.getName();
// TypeError: Cannot read property 'name'
// of undefined at Object.getName
```

Чуть более полная имитация классов, чем в прошлый раз (Lesson 7):
```js
function Node(name) {
  this.name = name;
  this.getName = function getName() {
    return this.name;
  };
}

const node = new Node('div');
node;
// Node { name: 'div',
//        getName: [Function: getName] }

```
Можем реализовать наследование без использования специальных конструкций:
```js
function PairedNode(name, body) {
  // передаем текущий контекст в родительский тип:
  // происходит in-place обновление `this`
  Node.apply(this, [name]); // super
  this.body = body;
}

const node = new PairedNode('div', 'body');
node;
// PairedNode: { name: 'div',
//               getName: [Function: getName],
//               body: 'body' }
```
