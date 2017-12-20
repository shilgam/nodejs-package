const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let count = 2; count <= Math.sqrt(num); count += 1) {
    if (num % count === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(11));
