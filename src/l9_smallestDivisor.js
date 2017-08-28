const smallestDivisor = (num) => {
  const iter = (divisor) => {
    if ((num % divisor) === 0) {
      return divisor;
    } else if (divisor ** 2 >= num) {
      return num;
    } return iter(divisor + 1);
  };
  return iter(2);
};
console.log(smallestDivisor(121));
