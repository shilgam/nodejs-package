import Order from './Order';

export const init = items => new Order(items);

// BEGIN (write your solution here)
export const cancel = (order) => {
  if (order.can('cancel')) {
    order.cancel();
  }
};
// END

// DEBUG:
// const myOrder = init();
// console.log(myOrder.history);
//
// myOrder.accept();
// console.log(myOrder.history);
//
// cancel(myOrder);
// console.log(myOrder.history);
