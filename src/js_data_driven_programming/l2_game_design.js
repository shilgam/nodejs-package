import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString,
get } from 'hexlet-pairs-data'; // eslint-disable-line

/*  >>>>>  EX  <<<<<
    Допишите логику функции run, которая содержит ядро игрового движка.
        АЛГОРИТМ:
    1. Если здоровье игрока (которого атаковали на предыдущем шаге) меньше или
    равно 0, то обновляем лог и возвращаем наружу. Игра закончена.
    2. В ином случае, берем рандомную карту, вычисляем урон, записываем новое
    здоровье, а также добавляем строчку в лог, используя формат:
    >>> const message = `Игрок '${name1}' применил '${cardName}'
    >>> против '${name2}' и нанес урон '${damage}'`;
    3. Повторяем.
        ПОДСКАЗКИ:
    * Параметр order в функции iter нужен для определения того, какой игрок сейчас
    атакует.
    * Формат записи лога cons(cons(health1, health2), message).
    * Используйте функцию random для выбора карты из колоды.
*/

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    const currentCard = random(cards);
    // console.log(`>>>>>>>    currentCard: ${pairToString(currentCard)}`);
    const activePlayer = (order === 1) ? player1 : player2;
    const passivePlayer = (order === 1) ? player2 : player1;
    const previousPassivePlayer = (order === 1) ? player1 : player2;
    const health = (plrName) => { return (plrName === player1) ? health1 : health2; };
    const cardName = car(currentCard);
    // console.log(`>>>>>>>    cardName: ${cardName}`);
    const nextOrder = (order === 1) ? 2 : 1;
    const damageFunc = hlth => cdr(currentCard)(hlth);
    const damage = damageFunc(health(passivePlayer));
    // console.log(`>>>>   damage: ${damage}`);
    const newHealth = (plrName) => {
      return (plrName === activePlayer) ? health(plrName) : (health(plrName) - damage);
    };
    // console.log(`>>>>>>>    newHealth(activePlayer): ${newHealth(activePlayer)}`);
    // console.log(`>>>>>>>    newHealth(passivePlayer): ${newHealth(passivePlayer)}`);
    const message = [
      `Игрок '${activePlayer}' применил '${cardName}' против `,
      `'${passivePlayer}' и нанес урон '${damage}'`,
    ].join('');
    // console.log(`>>>>>>>    message: ${message}`);
    const newLog = consList(cons(cons(newHealth(player1), newHealth(player2)), message), log);
    // console.log(`>>>>>>>    newLog: ${listToString(newLog)}`);

    if (health(previousPassivePlayer) <= 0) {
      const endMessage = `Игрок '${previousPassivePlayer}' убит. Игра окончена.`;
      const outputLog = consList(cons(cons(health1, health2), endMessage), log);
      return outputLog; // newLog;
    } return iter(newHealth(player1), player1, newHealth(player2), player2, nextOrder, newLog);
    // END
  };
  const startHealth = 10;
  const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default cards =>
  (name1, name2) =>
    run(name1, name2, cards);

const cards = l(
  cons('Костяная кочерга гробницы', () => 6),
  cons('Разъяряющая осада отчаяния', () => 5),
);

const gameLog = run('John', 'Ada', cards);
console.log(`>>>>   get0: ${pairToString(get(0, gameLog))}`);
console.log(`>>>>   get1: ${pairToString(get(1, gameLog))}`);
console.log(`>>>>   get2: ${pairToString(get(2, gameLog))}`);
console.log(`>>>>   get3: ${pairToString(get(3, gameLog))}`);
console.log(`>>>>   get4: ${pairToString(get(4, gameLog))}`);
