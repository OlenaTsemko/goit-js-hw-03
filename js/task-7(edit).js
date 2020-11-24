const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
 // Создаем переменную под счетчик, чтобы для удобства тестирования создавать последовательные айди.
let counter = 0;
const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    let transId = (counter += 1);
    const transaction = {
      id: transId,
      amount,
      type,
    }
    return transaction;
  },
  deposit(amount) {
    this.balance += amount;
    return this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(this.getBalance());
      return `${amount} - Снятие такой суммы невозможно, недостаточно средств`;
    }
    this.balance -= amount;
    return this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      if (this.transactions[i].id === id) {
        return this.transactions[i];
      }
    }
    return `Такого id: ${id} не обнаружено!`;
  },
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
console.log(account.createTransaction(200, Transaction.DEPOSIT));
console.log(account.createTransaction(600, Transaction.DEPOSIT));
account.deposit(200);
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.withdraw(500));
account.withdraw(100);
console.log(account.getBalance());
console.log(account.transactions);
account.withdraw(50);
console.log(account.transactions);
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(100));
account.deposit(400);
console.log(account.getTransactionTotal(Transaction.DEPOSIT))
console.log(account.getTransactionTotal(Transaction.WITHDRAW))