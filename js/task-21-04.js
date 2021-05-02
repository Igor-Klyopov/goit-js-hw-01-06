const account = {
  owner: 'Mango',
  balance: 24000,
  discount: 0.1,
  orders: ['order-1', 'order-2', 'order-3'],
  changeDiscount(value) {
    // метод, который меняет дисконт аккаунта
    this.discount = value;
  },
  showOrders() {
    // метод, который показывает все заказы аккаунта
    return this.orders;
  },
  addOrder(cost, order) {
    // метод, который проводит списание со счета на сумму cost и добавляет заказ (order) в корзину (orders)
    this.balance -= cost;
    this.orders.push(order);
  },
};
account.changeDiscount(0.15);
console.log(account.discount); // 0.15
console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']
account.addOrder(5000, 'order-4');
console.log(account.balance); // 19000
console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

///////////////////////////////////////////////////////////////

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    // метод, добавляющий новый инвентарь (itemName) в массив items
    this.items.push(itemName);
    return `Adding ${itemName} to inventory`;
  },

  remove(itemName) {
    // метод, удаляющий инвентарь (itemName) из массива items

    //---вариант 1---//
    // for (const item of this.items) {
    //   if (item === itemName) {
    //     this.items.splice(this.items.indexOf(itemName), 1);
    //   }
    // }

    //---вариант 2---//это норм? или лучше так не писать?
    // this.items.forEach((item, index, items) => items.splice(index, 1));

    //---вариант 3---//
    this.items = this.items.filter(el => el !== itemName);
    return `Removing ${itemName} from inventory`;
  },
};

// Функция, которая вызывает action (метод) и делает манипуляции с инвентарем (удаляет или добавляет)
function invokeInventoryAction(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  return action(itemName);
}
invokeInventoryAction('Medkit', inventory.add.bind(inventory));
console.log(inventory.items);
invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
console.log(inventory.items);
