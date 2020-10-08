/* Задание 7 - дополнительное, выполнять не обязательно
Напиши скрипт управления личным кабинетом интернет банка. 
Есть объект account в котором необходимо реализовать методы для 
работы с балансом и историей транзакций. */

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
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

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */

  createTransaction(amount, type) {
    this.transactions.push({
      id: this.transactions.length,
      amount,
      type,
    });
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
    return `Добавлено ${amount} средств`;
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
    if (amount > this.balance) {
      console.log(this.getBalance());
      return `${amount} - Снятие такой суммы невозможно, недостаточно средств`;
    }
    this.balance -= amount;
    this.createTransaction(amount, Transaction.WITHDRAW);
    return `Снято ${amount} средств`;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        return this.transactions[i];
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (type === transaction.type) {
        sum += transaction.amount;
      }
    }
    return `сумма ${type} = ${sum}`;
  },
};

console.log(account.deposit(1000));
console.log(account.deposit(2000));
console.table(account.transactions);
console.log('balance: ', account.getBalance());

console.log(account.withdraw(500));
console.log(account.withdraw(3000));
console.table(account.transactions);
console.log('balance: ', account.getBalance());

console.log(account.getTransactionDetails(0));
console.log(account.getTransactionDetails(1));
console.log(account.getTransactionDetails(2));

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
