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
## Lesson 9: Прототипы
В отличие от большинства других ОО-языков, объектная система в JavaScript основана на прототипах, а не классах.

__Наследство__

Объект сожержит свойства, которые на объекте не определены:
```js
const obj = { key: 'value' };

obj.toString(); // [object Object]
obj.valueOf(); // { key: 'value' }

// Все ключи, которые определены на объекте:
Object.getOwnPropertyNames(obj); // [ 'key' ]
// Q: Где хранятся свойства `toString` и `valueOf`?
```

A: Эти свойства присутсвуют в прототипе объекта.

def: __Прототип объекта__ -- скрытое свойство, которое находится внутри объекта.

Извлечение прототипа объекта:
```js
const obj = { key: 'value' };

// [[Prototype]]
const proto = Object.getPrototypeOf(obj);

Object.getOwnPropertyNames(proto);
// [ 'constructor', 'hasOwnProperty',
//   'isPrototypeOf', 'propertyIsEnumerable',
//   'toString', 'valueOf',
//   '__proto__', 'toLocaleString',
//   '__defineGetter__','__defineSetter__',
//   '__lookupGetter__', '__lookupSetter__' ]
```

Note: Прототип -- это обычный объект. "Никакой магии".


__[[Get]]__

* Как происходит обращение к свойствам любого объекта в js?

* Как мы начинаем использовать те свойства, которые лежат в прототипе?

```js
obj.name; // or obj['name']
```

A: За это отвечает специальная операция `get`.

Алгоритм работы `get`:
1. Есть ли у текущего объекта свойство `name`?
2. Есть ли у прототипа этого объекта свойство `name`?
3. Если прототип `null`, то возвращаем `undefined`

Реализуем свою собственную функию `get`, которая работает практически так же:
```js
const obj = { key: 'value' };

/* CASE 1: Native: */
obj.key; // value
obj.toString; // [Function: toString]

/* CASE 2: Custom: */
const get = (obj, property) => {
  if (obj.hasOwnProperty(property)) {
    return obj[property];
  } else if (Object.getPrototypeOf(obj) === null) {
    return undefined;
  } else {
    return get(Object.getPrototypeOf(obj), property);
  }
}

get(obj, 'key'); // value
get(obj, 'toString'); // [Function: toString]
```

__Создание объектов__
* Как в js происходит создание объектов?
* И как объекты связаны с прототипами?

```js
// Создание объекта ({} -  это синтаксический сахар):
const obj = new Object();

typeof Object; // function
const proto = Object.getPrototypeOf(obj); // Извлекаем прототип объекта

proto === Object.prototype; // true
// прототип внутри объекта -- это ссылка на `Object.prototype` (а не копия!)

obj.prototype; // undefined
//
```
Вывод:
1. Объекты конструируются с помощью функций.
2. Функция содержит в себе свойство `prototype`.
3. Когда создаем объекты на основе этой функции, то внутрь объекта (во внутреннее свойство `prototype`) записывается сссылка на свойство `prototype` исходной функции.

__Создание прототипа__

```js
function F() {}
F.prototype; // {}

Object.getOwnPropertyNames(F);
// [ 'length', 'name', 'prototype' ]

Object.getOwnPropertyNames(F.prototype);
// [ 'constructor' ]

const obj = new F();

obj.constructor === F; // true    // (1), (2)
obj.name; // undefined    // (3)
```
Вывод:
1. Внутри объекта есть свойство `constructor`, т.к. он есть в прототипе этого объекта.
2. `constructor` равен самой функции F (ссылка на него).
3. _Свойства функции_ никак не связаны со _свойствами порождаемого им объекта_
    * А вот _свойства прототипа функции_ связаны.
    И эти свойства находятся внутри объектов, порождаемых этой функцией.

__Изменение прототипа__
```js
function F() {}

const obj1 = new F();

F.prototype.color = 'green';

const obj2 = new F();

console.log(obj1.color); // green
console.log(obj2.color); // green
```

__Определение класса__

Повторим создание класса без использования самого класса, как это делалось раньше, до введения ES6

```js
function Node(name) {
  this.name = name;
}

Node.prototype.getName = function getName() {
  return this.name;
};

const obj = new Node('span');
obj.getName(); // span
```

__Перекрытие (Overlap)__

У прототипов есть одна особенность, которой нет в обычных языках у классов:

При изменении свойства прототипа из текущего объекта, свойство самого прототипа не меняется. А создается локальное свойство у самого объекта.
Этот механизм позволяет предотвратить опасные побочные эффекты.

```js
function F() {}
F.prototype.color = 'green';

const obj1 = new F();
const obj2 = new F();

obj2.color = 'red'; // изменили свойство объекта
// Свойство прототипа не меняется

console.log(obj1); // green
console.log(obj2); // red
console.log(F.prototype.color); // green
```

## Lesson 10: Цепочки прототипов
Механизм прототипов в js не обладал бы такой мощью, если бы не возможность строить цепочки из прототипов

__Прототип моего прототипа__
```js
function F() {}
const obj = new F();

const proto1 = Object.getPrototypeOf(obj);
proto1 === F.prototype; // true

const proto2 = Object.getPrototypeOf(proto1);
proto2 === Object.prototype; // true

// obj -> F.prototype -> Object.prototype -> null
```

__Построение цепочек__

* Наивный способ (не рабочий):

```js
function A() {}
function B() {}

// wrong way
B.prototype = A.prototype;

B.prototype.color = 'green';
A.prototype.color; // green !!!  // меняется, т.к.
// это один и тот же объект

const obj = new B();

Object.getPrototypeOf(obj) === A.prototype; // true
// Мы не получили цепочку прототипов
// В цепочке прототипов B() никак не участвует
```

* Рабочий способ:

```js
function A() {}
function B() {}

// right way:
// создаем новый объект
B.prototype = Object.create(A.prototype);

B.prototype.color = 'green';
A.prototype.color; // undefined

const obj = new B();

const proto1 = Object.getPrototypeOf(obj);

console.log(proto1 === B.prototype); // true

const proto2 = Object.getPrototypeOf(proto1);

proto2 === A.prototype; // true
```

__Oбъект на основе прототипа__

Cоздаем фейковый конструктор, гарантированно не содержащий side effects.
```js
Object.create = function create(protoObj) {
  function F() {}
  F.prototype = protoObj;
  return new F();
};

function A() {}
function B() {}

B.prototype = Object.create(A.prototype);

// wrong way
B.prototype = new A();
// причина - side effects
```

__Линковка__

Линковка - еще один интересный аспект, отличающий js от других class-based языков.
При вызове `new` происходит возврат нового объекта, который слинкован с прототипом функции.
Вызов `new` это просто линковка.
```js
function F() {}
const obj1 = new F();
const obj2 = new F();

const proto1 = Object.getPrototypeOf(obj1);
const proto2 = Object.getPrototypeOf(obj2);

proto1 === proto2; // true
// прототип у них один и тот же
```

__Заключение__
* В js нет классов, но есть конструкторы
* Цепочка прототипов - основа наследования в js
* `new` не создает "инстанс" класса/функции
* `new` создает обычный объект и линкует его с прототипом функции
* `instanceof` проверяет наличие прототипа в цепочке
* Прототип объекта `Object.prototype` равен `null`
