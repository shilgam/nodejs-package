import { cons, car, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { getName as getSimpleCardName, damage as simpleCardDamage } from './l4_simpleCard'; // eslint-disable-line
import { getName as getPercentCardName, damage as percentCardDamage } from './l4_percentCard'; // eslint-disable-line
import { typeTag } from './l4_type'; // eslint-disable-line

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

    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);
