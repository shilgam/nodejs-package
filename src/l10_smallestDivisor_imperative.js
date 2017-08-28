// Напишите функцию smallestDivisor.
// Она должна находить наименьший целый делитель числа.
// Поведение у функции должно быть таким же, как в предыдущем уроке,
// но реализация должнa быть другим.
// На этот раз реализуйте императивный итеративный процесс, что означает:
// - не используйте рекурсию
// - используйте переменные
// - используйте цикл while
// Например, наименьший делитель числа 15 это 3.

const smallestDivisor = (num) => {
  let counter = 2;
  let divisor = num;

  if (num < 1) {
    return NaN;
  }

  while (counter ** 2 <= num) {
    if (num % counter === 0) {
      divisor = counter;
    }
    counter += 1;
  }
  return divisor;
};

console.log(smallestDivisor(121));
console.log(smallestDivisor(0));
