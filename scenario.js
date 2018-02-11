const Diner = require('./diner');
const SteakHouse = require('./steakhouse');

const diner = new Diner();
const steakhouse = new SteakHouse();

steakhouse.serveMeal(diner);

diner.placeOrder();
diner.requestAdditions();
diner.payTab();
