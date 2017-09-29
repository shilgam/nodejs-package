import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line

/*  >>>>>  EX  <<<<<
    Допишите логику функции run, которая содержит ядро игрового движка.
    Алгоритм:

    1. Если здоровье игрока (которого атаковали на предыдущем шаге) меньше или
    равно 0, то обновляем лог и возвращаем наружу. Игра закончена.

    2. В ином случае, берем рандомную карту, вычисляем урон, записываем новое
    здоровье, а также добавляем строчку в лог, используя формат:

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${damage}'`;

    3. Повторяем.
*/

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)


    // END
  };

  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards =>
  (name1, name2) =>
    run(name1, name2, cards);
