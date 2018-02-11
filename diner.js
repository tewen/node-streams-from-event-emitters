const EventEmitter = require('events');

class Diner extends EventEmitter {
  placeOrder() {
    this.emit(
      'placeOrder',
      'Hash Browns',
      'Porterhouse Steak',
      'Blackforest Cake'
    );
    console.log('Finished placing order');
  }

  requestAdditions() {
    this.emit(
      'requestAdditions',
      ['Steak Sauce', 'Hot Sauce']
    );
  }

  payTab() {
    this.emit(
      'payTab',
      'credit',
      500.16
    )
  }
}

module.exports = Diner;
