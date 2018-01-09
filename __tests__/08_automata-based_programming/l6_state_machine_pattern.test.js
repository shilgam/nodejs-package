import Order from '../../src/08_automata-based_programming/l6_state_machine_pattern/Order';
import { init, cancel } from '../../src/08_automata-based_programming/l6_state_machine_pattern/solution';

test('flow', () => {
  const order = new Order([]);
  expect(order.is('init')).toBeTruthy();
  expect(order.can('accept')).toBeTruthy();
  expect(order.can('ship')).toBeFalsy();
  expect(order.can('complete')).toBeFalsy();
  expect(order.can('cancel')).toBeTruthy();
  expect(order.can('refund')).toBeFalsy();

  order.accept();
  expect(order.is('pending')).toBeTruthy();
  expect(order.can('accept')).toBeFalsy();
  expect(order.can('ship')).toBeTruthy();
  expect(order.can('complete')).toBeFalsy();
  expect(order.can('cancel')).toBeTruthy();
  expect(order.can('refund')).toBeFalsy();

  order.ship();
  expect(order.is('shipped')).toBeTruthy();
  expect(order.can('accept')).toBeFalsy();
  expect(order.can('ship')).toBeFalsy();
  expect(order.can('complete')).toBeTruthy();
  expect(order.can('cancel')).toBeFalsy();
  expect(order.can('refund')).toBeTruthy();
});

test('init', () => {
  const order = init([]);
  expect(order.is('init')).toBeTruthy();
  expect(order.history.length).toBe(0);
});

test('cancel', () => {
  const order = new Order([]);
  cancel(order);
  expect(order.history.length).toBe(1);
  expect(order.history[0].state).toBe('canceled');
  expect(order.is('canceled')).toBeTruthy();
});

test('can\'t cancel from current state', () => {
  const order = new Order([]);
  order.accept();
  order.ship();
  expect(() => cancel(order)).not.toThrow();
  order.complete();
  expect(() => cancel(order)).not.toThrow();
  order.refund();
  expect(() => cancel(order)).not.toThrow();
});
