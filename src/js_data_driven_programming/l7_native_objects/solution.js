import { cons as consList, l, random, head, reverse, toString as listToString, length, get } from 'hexlet-pairs-data'; // eslint-disable-line
import { cons, car, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import simpleCard from './simpleCard';
import percentCard from './percentCard';

/*  >>>>>  EX  <<<<<
        simpleCard.js
    Реализуйте интерфейс simpleCard, основываясь на реализации percentCard.

        solution.js
    Реализуйте функцию run, используя тип данных object для хранения элементов внутри списка log.
*/

const run = (player1, player2, cards, customRandom) => {
  // BEGIN (write your solution here)

  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      const previousStep = head(log);
      const lastStep = {
        health1: previousStep.health1,
        health2: previousStep.health2,
        message: `${name1} был убит`,
      };
      return consList(lastStep, log);
    }
    const card = customRandom(cards);
    const cardName = card.name;
    const points = card.damage(health2);
    const newHealth = health2 - points;

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${points}'`;
    let stats;
    if (order === 1) {
      stats = {
        health1,
        health2: newHealth,
        message,
      };
    } else if (order === 2) {
      stats = {
        health1: newHealth,
        health2: health1,
        message,
      };
    }
    const newLog = consList(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };

  // END

  const startHealth = 10;
  const logItem = {
    health1: startHealth,
    health2: startHealth,
    message: 'Начинаем бой!',
  };

  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);

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
// const gameLog = game('John', 'Ada'); // .toBe(5);
// console.log(`>>>>   Number of steps:  ${length(gameLog)}`);
// console.log(`>>>>   get0: ${listToString(get(0, gameLog))}`); // .toBe('(10, 10)')
// console.log(`>>>>   get1: ${listToString(get(1, gameLog))}`); // .toBe('(10, 3)')
// console.log(`>>>>   get2: ${listToString(get(2, gameLog))}`); // .toBe('(2, 3)')
// console.log(`>>>>   get3: ${listToString(get(3, gameLog))}`); // .toBe('(2, -4)')
// console.log(`>>>>   get4: ${listToString(get(4, gameLog))}`); // .toBe('(2, -4)')
