// // <<<<< FIRST WAY OF IMPLEMENTATION >>>>>
// // If constructor defined as:
// const cons = (a, b) => (message) => {
//   switch (message) {
//     case 'car':
//       return a;
//     case 'cdr':
//       return b;
//     default:
//       return 'incorrect call';
//   }
// };
//
// // then getters will be:
// export const car = pair => pair('car');
// export const cdr = pair => pair('cdr');
//
// const pair1 = cons('Hi', 'giys!');
// console.log(`Get first elem:   ${car(pair1)}`);
// console.log(`Get second elem:  ${cdr(pair1)}`);
// console.log(`Pass wrong msg:   ${pair1('any message')}`);


// <<<<< SECOND WAY OF IMPLEMENTATION >>>>>
// If constructor defined as:
export const cons = (x, y) => f => f(x, y);

// then getters will be:
export const car = pair => pair((x, y) => x);
export const cdr = pair => pair((x, y) => y);

const pair2 = cons('Hi', 'giys!');
console.log(`Get first elem:   ${car(pair2)}`);
console.log(`Get second elem:  ${cdr(pair2)}`);
