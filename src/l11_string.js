const inputStr = 'hello, world!';

const reverse = (str) => {
  const arr = str.split('');
  const leng = str.length;
  const reversedArr = new Array(leng);
  let count = 0;
  while (count < leng) {
    reversedArr.push(arr[leng - count - 1]);
    count += 1;
  }
  return reversedArr.join('');
};

console.log(reverse(inputStr));
