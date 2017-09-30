import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line


/*  >>>>>  EX  <<<<<
    Экспортируйте функцию по умолчанию, которую снаружи именуют и используют
    как make (смотрите модуль с тестами). Вторым параметром эта функция
    принимает пользовательскую random функцию.
    Допишите вызов пользовательской функции random в функции run.
        ПОДСКАЗКИ:
    Как вы помните из прошлой практики, основной функцией, реализующей игру,
    является run. Эта функция принимала три параметра: колоду карт и имена двух
    игроков.

    Однако, для улучшения интерфейса игры мы разбили процесс её инициализации
    (тремя параметрами) на два этапа. Для этого вызов основной функции run был
    обернут двумя анонимными функциями. Вызов первой ("внешней") функции,
    которой передется колода карт, возвращает другую функцию. В свою очередь,
    вызвов этой (второй) функции с передачей ей на вход имен игроков приводит к
    вызову run со всеми нужными (ранее переданными) параметрами.

    В текущей практике вам необходимо немного изменить интерфейс игры: теперь,
    на первом этапе инициализации, наряду с колодой карт также следует
    передавать пользовательскую random функцию.
*/

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 <= 0) {
      return consList(cons(car(head(log)), `${name1} был убит`), log);
    }
    // BEGIN (write your solution here)

    // END
    const cardName = car(card);
    const damage = cdr(card)(health2);
    const newHealth = health2 - damage;

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${damage}'`;
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

// BEGIN (write your solution here)

// END
