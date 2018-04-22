// see course: "Программирование, управляемое данными"
// https://ru.hexlet.io/courses/ddp/lessons/dispatch/theory_unit
// src/04_data_driven_programming/l5_dispatch

import { getName, damage } from './card';
import * as simpleCard from './simpleCard'; // eslint-disable-line
import * as percentCard from './percentCard'; // eslint-disable-line

const card1 = simpleCard.make('Костяная кочерга гробницы', 3);
console.log(damage(card1, 10)); // damage: 3 units

const card2 = percentCard.make('Другая Карта', 30);
console.log(damage(card2, 10)); // damage: 3 (30%)
// console.log(getName(card2));
