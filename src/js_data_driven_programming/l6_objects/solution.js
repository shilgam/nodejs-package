import { cons, car, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString, length, get } from 'hexlet-pairs-data'; // eslint-disable-line
import simpleCard from './simpleCard';
import percentCard from './percentCard';

/*  >>>>>  EX  <<<<<
        simpleCard.js
    Реализуйте интерфейс типа simpleCard.

        solution.js
    Допишите логику работы функции run.
*/

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    const card = customRandom(cards);

    // BEGIN (write your solution here)
    const cardName = card('getName');
    const points = card('damage', health2);
    // END

    const newHealth = health2 - points;

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${points}'`;
    let stats;
    if (order === 1) {
      stats = cons(cons(health1, newHealth), message);
    } else if (order === 2) {
      stats = cons(cons(newHealth, health1), message);
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

const make = (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);
export default make;

// // Testing
// const cards = l(
//   simpleCard('Костяная кочерга гробницы', 7),
//   percentCard('Памятный металл палача', 80),
// );
//
// let cardIndex = 2;
// const pseudoRandomFunc = (cardsPack) => {
//   cardIndex = cardIndex === 0 ? 1 : 0;
//   return get(cardIndex, cardsPack);
// };
//
// // Rinning game with random function OR for testing:
// const game = make(cards, pseudoRandomFunc); // random
// const gameLog = game('John', 'Ada');
// console.log(`>>>>   Number of steps:  ${length(gameLog)}`);
// console.log(`>>>>   get0: ${pairToString(get(0, gameLog))}`); // .toBe('(10, 10)')
// console.log(`>>>>   get1: ${pairToString(get(1, gameLog))}`); // .toBe('(10, 3)')
// console.log(`>>>>   get2: ${pairToString(get(2, gameLog))}`); // .toBe('(2, 3)')
// console.log(`>>>>   get3: ${pairToString(get(3, gameLog))}`); // .toBe('(2, -4)')
// console.log(`>>>>   get4: ${pairToString(get(4, gameLog))}`); // .toBe('(2, -4)')
