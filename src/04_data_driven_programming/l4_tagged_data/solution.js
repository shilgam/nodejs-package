import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString,
length, get } from 'hexlet-pairs-data'; // eslint-disable-line
import { getName as getSimpleCardName, damage as simpleCardDamage, make as makeSimpleCard } from './simpleCard'; // eslint-disable-line
import { getName as getPercentCardName, damage as percentCardDamage, make as makePercentCard } from './percentCard'; // eslint-disable-line
import { typeTag } from './type'; // eslint-disable-line

/*  >>>>>  EX  <<<<<
        1) simpleCard.js
    Реализуйте интерфейс работы карты с типом SimpleCard по аналогии с типом
    PercentCard. Второй параметр у конструктора - урон.
    >>> simpleCard.make('Жесткий ломатель мироздания', 6)

        2) solution.js
    Реализуйте логику работы функции run.

        3) ПОДСКАЗКИ
    Для определения типа карты воспользуйтесь функциями isSimpleCard и/или isPercentCard.
*/

const isSimpleCard = card => typeTag(card) === 'SimpleCard';
const isPercentCard = card => typeTag(card) === 'PercentCard';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)

    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    const card = customRandom(cards);

    const cardName = getCardName(card);

    const damage = getDamage(card, health2);

    const newHealth = health2 - damage;

    const message = [
      `Игрок '${name1}' применил '${cardName}' против `,
      `'${name2}' и нанес урон '${damage}'`,
    ].join('');

    let stats;
    if (order === 1) {
      stats = cons(cons(health1, newHealth), message);
    } else if (order === 2) {
      stats = cons(cons(newHealth, health1), message);
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);

    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

const getCardName = (card) => {
  if (isSimpleCard(card)) {
    return getSimpleCardName(card);
  } return getPercentCardName(card);
};

const getDamage = (card, health) => {
  if (isSimpleCard(card)) {
    return simpleCardDamage(card, health);
  } return percentCardDamage(card, health);
};

const make = (cards, customRandom = random) =>
  (player1, player2) => run(player1, player2, cards, customRandom);

export default make;

const cards = l(
  makeSimpleCard('Костяная кочерга гробницы', 7),
  makePercentCard('Памятный металл палача', 80),
);

let cardIndex = 2;
const pseudoRandomFunc = (cardsPack) => {
  cardIndex = cardIndex === 0 ? 1 : 0;
  return get(cardIndex, cardsPack);
};

// // Rinning game with random function OR for testing:
const game = make(cards, pseudoRandomFunc); // random

const gameLog = game('John', 'Ada');

// console.log(`>>>>   Number of steps:  ${length(gameLog)}`);
// console.log(`>>>>   get0: ${pairToString(get(0, gameLog))}`); // .toBe('(10, 10)')
// console.log(`>>>>   get1: ${pairToString(get(1, gameLog))}`); // .toBe('(10, 3)')
// console.log(`>>>>   get2: ${pairToString(get(2, gameLog))}`); // .toBe('(2, 3)')
// console.log(`>>>>   get3: ${pairToString(get(3, gameLog))}`); // .toBe('(2, -4)')
// console.log(`>>>>   get4: ${pairToString(get(4, gameLog))}`); // .toBe('(2, -4)')
