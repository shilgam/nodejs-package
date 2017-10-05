import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

/*  >>>>>  EX  <<<<<
        simpleCard.js
    Реализуйте интерфейс simpleCard, основываясь на реализации percentCard.

        solution.js
    Реализуйте функцию run, используя тип данных object для хранения элементов внутри списка log.
*/

const run = (player1, player2, cards, customRandom) => {
  // BEGIN (write your solution here)

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
