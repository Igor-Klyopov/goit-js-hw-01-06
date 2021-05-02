/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const TRANSACTION = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],

  id: 0,
  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: (this.id += 1),
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const newTransaction = this.createTransaction(amount, TRANSACTION.DEPOSIT);
    this.transactions.push(newTransaction);
    this.balance += amount;
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const newTransaction = this.createTransaction(amount, TRANSACTION.WITHDRAW);
    this.transactions.push(newTransaction);
    if (amount > this.balance) {
      console.log(`снятие такой суммы не возможно, недостаточно средств`);
    }
    this.balance -= amount;
  },
  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return `у вас на счету: ${this.balance} деньжищ`;
  },
  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
  },
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let transactionTypesTotal = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        transactionTypesTotal += transaction.amount;
      }
    }
    return transactionTypesTotal;
  },
};

console.log(account);
account.deposit(1000);
account.deposit(2000);
account.deposit(3000);
account.withdraw(7000);
account.getBalance();
console.log(account.getBalance());
account.getTransactionDetails(2);
console.log(account.getTransactionDetails(2));
account.getTransactionTotal(TRANSACTION.DEPOSIT);
console.log(account.getTransactionTotal(TRANSACTION.DEPOSIT));
console.log(account.getTransactionTotal(TRANSACTION.WITHDRAW));
