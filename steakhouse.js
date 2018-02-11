const EventEmitter = require('events');

class SteakHouse extends EventEmitter {
  serveMeal(guest) {
    this.guest = guest;
    this.guest.on('placeOrder', this.takeOrder);
    this.guest.on('requestAdditions', this.fetchAdditions);
    this.guest.on('payTab', this.chargeCustomer);
  }

  takeOrder(appetizer, main, dessert) {
    console.log(`Diner ordered: ${appetizer}`);
    console.log(`Diner ordered: ${main}`);
    console.log(`Diner ordered: ${dessert}`);
  }

  fetchAdditions(requestedItems) {
    console.log(`Diner requested: ${requestedItems.join(', ')}`);
  }

  chargeCustomer(method, amount) {
    console.log(`Diner used: ${method}`);
    console.log(`Diner charged: ${amount}`);
  }
}

module.exports = SteakHouse;
