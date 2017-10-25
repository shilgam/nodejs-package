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