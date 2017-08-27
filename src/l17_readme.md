##Types in JavaScript
```
typeof null        // "object" (не "null" по историческим причинам)
typeof undefined   // "undefined"
```
## Equality comparisons
===   strict equality,
==    loose equality (расслабленное сравнение с приведением типов)
```
null === undefined;   // false
null == undefined;    // true
!null;                // true
```

## Явные конверсии в JavaScript
```
Number('590');    // 590
Number('aaa!!');  // NaN

Boolean(1);       // true
Boolean(0);       // false

String(true);     // 'true'
String(false);    // 'false'

String('44843');  // '44843'
```s
