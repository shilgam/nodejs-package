import StateMachine from 'javascript-state-machine'; // eslint-disable-line


export default class Order {
  constructor(items) {
    this.items = items;
    this.history = this.items || [];

    this._fsm(); // eslint-disable-line
  }
}

StateMachine.factory(Order, {
  init: 'init',
  transitions: [
    // BEGIN (write your solution here)
    { name: 'accept', from: 'init', to: 'pending' },
    { name: 'ship', from: 'pending', to: 'shipped' },
    { name: 'complete', from: 'shipped', to: 'completed' },
    { name: 'cancel', from: ['init', 'pending'], to: 'canceled' },
    { name: 'refund', from: ['shipped', 'completed'], to: 'refunded' },
    // END
  ],
  methods: {
    // BEGIN (write your solution here)
    onEnterState({ from, to }) {
      if (from !== 'none') {
        this.history.push({ state: to, createdAt: new Date() });
      }
    },
    // END
  },
});
