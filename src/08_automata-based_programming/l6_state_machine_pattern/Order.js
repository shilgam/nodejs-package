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
    { name: 'cancel', from: 'init', to: 'canceled' },
    { name: 'cancel', from: 'pending', to: 'canceled' },
    { name: 'refund', from: 'shipped', to: 'refunded' },
    { name: 'refund', from: 'completed', to: 'refunded' },
    // END
  ],
  methods: {
    // BEGIN (write your solution here)
    onEnterState() {
      if (!this._fsm.is('init')) {  // eslint-disable-line
        this.history.push({ state: this._fsm.state, createdAt: new Date() }); // eslint-disable-line
      }
    },
    // END
  },
});
