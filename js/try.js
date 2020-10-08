/* Примеры----------------------------------------------------*/
// 1.----------------------------------------------------------
// const key = 'person';
// const getKey = () => 'age';

// // Computed properties
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };

// console.log(object); // {person: 'Mango', age: 2}

// 2.-------------------------------------------------------------
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,

//   greet() {
//     console.log('Welcome!');
//   },
// };

// hotel.greet(); // Welcome!

// 3.-------------------------------------------------------------
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };

// hotel.showName(); // Resort Hotel

// hotel.changeCapacity(200);
// console.log(hotel.capacity); // 200

// 4.-------------------------------------------------------------
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// for (const key in hotel) {
//   console.log('Key: ', key);
//   console.log('Value: ', hotel[key]);
// }

// 5.-------------------------------------------------------------
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]

// console.log(keys);
// console.log(values);
// console.log(entries);

// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

// 6.-------------------------------------------------------------
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

// 7.-------------------------------------------------------------
// const add = function (...args) {
//   console.log(args); // массив всех аргументов
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);

// 8.-------------------------------------------------------------
// const add = function (value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);

// 9.-------------------------------------------------------------

// const student = {
//   name: 'John Doe',
//   age: 16,
//   scores: {
//     maths: 74,
//     english: 63,
//     science: 85,
//   },
// };

// без деструктуризации-------
// function displaySummary(student) {
//   console.log('Hello, ' + student.name);
//   console.log('Your Maths score is ' + (student.scores.maths || 0));
//   console.log('Your English score is ' + (student.scores.english || 0));
//   console.log('Your Science score is ' + (student.scores.science || 0));
// }
// ------------------------------

// с деструктуризацией--------
// function displaySummary({
//   name,
//   scores: { maths = 0, english = 0, science = 0 },
// }) {
//   console.log('Hello, ' + name);
//   console.log('Your Maths score is ' + maths);
//   console.log('Your English score is ' + english);
//   console.log('Your Science score is ' + science);
// }
// ------------------------------

// displaySummary(student);

// 10.-------------------------------------------------------------
// const student = {
//   firstname: 'Glad',
//   lastname: 'Chinda',
//   country: 'Nigeria',
// };

// // Деструктуризація об'єкта
// const { firstname, lastname, country } = student;

// console.log(firstname, lastname, country); // Glad Chinda Nigeria

// 11.------------------------------------------------------------
// Інііціалізація локальних змінних
// let country = 'Canada';
// let firstname = 'John';
// let lastname = 'Doe';

// const student = {
//   firstname: 'Glad',
//   lastname: 'Chinda',
//   country: 'Nigeria',
// };

// // Перевизначення ім'я та прізвища за допомогою деструктуризації
// // Додаємо пару круглих дужок, оскільки це вираз призначення
// ({ firstname, lastname } = student);

// // країна залишається незмінною (Canada)
// console.log(firstname, lastname, country); // Glad Chinda Canada

// 12.-------------------------------------------------------------
// const person = {
//   name: 'John Doe',
//   country: 'Canada',
// };

// // Присвоїти значення 25 для віку за замовчуванням, якщо undefined
// const { name, country, age = 25 } = person;

// // Шаблонні літерали ES6
// console.log(`I am ${name} from ${country} and I am ${age} years old.`);

// // I am John Doe from Canada and I am 25 years old.'

// 13.-------------------------------------------------------------
// [object_key]:[variable_name] = [default_value]
// const person = {
//   name: 'John Doe',
//   country: 'Canada',
// };

// // Присвоїти значення 25 для віку за замовчуванням, якщо ключ віку undefined
// const { name: fullname, country: place, age: years = 25 } = person;

// // Шаблонні літерали ES6
// console.log(`I am ${fullname} from ${place} and I am ${years} years old.`);

// // I am John Doe from Canada and I am 25 years old.'

// 14.------------------------------------------------------------
// const student = {
//   name: 'John Doe',
//   age: 16,
//   scores: {
//     maths: 74,
//     english: 63,
//   },
// };

// // Ми визначаємо три локальні змінні: name, maths, science
// const {
//   name,
//   scores: { maths, science = 50 },
// } = student;

// console.log(
//   `${name} scored ${maths} in Maths and ${science} in Elementary Science.`,
// );

// // John Doe scored 74 in Maths and 50 in Elementary Science.

// 15.------------------------------------------------------------
// const person = {
//   name: 'Lena',
//   age: 31,
//   city: 'Chernivtsi',
//   isOnline: true,
//   updateAge(newAge) {
//     this.age = newAge;
//   },
//   updateCity(newCity) {
//     this.city = newCity;
//     this.changeOnline(false);
//   },
//   changeOnline(offline) {
//     this.isOnline = offline;
//   },
// };

// console.log('name' in person); // true

// console.log(person);
// person.updateAge(32);
// console.log(person);
// person.updateCity('Kiyv');
// console.log(person);

// 16.------------------------------------------------------------
// const friends = [
//   { name: 'a', statusOnline: true, age: 25 },
//   { name: 'b', statusOnline: false, age: 35 },
//   { name: 'c', statusOnline: false, age: 45 },
//   { name: 'd', statusOnline: true, age: 15 },
// ];
// console.table(friends);

// const findFriend = function (allFriends, name) {
//   for (const friend of allFriends) {
//     console.log(friend);
//     if (friend.name === name) {
//       return 'find';
//     }
//   }
//   return 'not find';
// };

// console.log(findFriend(friends, 'c')); // find
// console.log(findFriend(friends, 'e')); // not find

// const getAllNames = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     names.push(friend.name);
//   }
//   return names;
// };
// console.log(getAllNames(friends));

// const getOnlineFriend = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     if (friend.statusOnline) {
//       names.push(friend.name);
//     }
//   }
//   return names;
// };

// console.log(getOnlineFriend(friends));

/* Задание 1----------------------------------------------------
Напиши скрипт, который, для объекта user, последовательно:

- добавляет поле mood со значением 'happy'
- заменяет значение hobby на 'skydiving'
- заменяет значение premium на false
- выводит содержимое объекта user в формате ключ:значение используя 
Object.keys() и for...of */

/* 
1. добавляем/изменяем значения объекта
2. возвращаем массив с ключами объекта
3. перебираем ключи
4. выводим измененный объект
*/

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

/* Задание 2----------------------------------------------------
Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
Функция возвращает число - количество свойств. */

/* 
1. создаем переменную тотал = 0
2. возвращаем массив свойств объекта
3. тотал равняется длине массива
4. возвращаем тотал
*/

// const countProps = function (obj) {
//   let total = 0;
//   const keys = Object.keys(obj);

//   total = keys.length;
//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

/* Задание 3------------------------------------------------------
Напиши функцию findBestEmployee(employees), 
которая принимает объект сотрудников и возвращает имя самого 
продуктивного (который выполнил больше всех задач). 
Сотрудники и кол-во выполненых задач содержатся как свойства 
объекта в формате "имя":"кол-во задач". */

/* 
1. перебираем массив значений
2. определяем максимальное
3. перебираем массив ключей
4. если значение ключа соответствует максимальному, возвращаем этот ключ
*/

// const findBestEmployee = function (employees) {
//   let bestEmployee = '';
//   const values = Object.values(employees);
//   const max = Math.max(...values);
//   const keys = Object.keys(employees);
//   for (const key of keys) {
//     if (employees[key] === max) {
//       bestEmployee = key;
//     }
//   }
//   return bestEmployee;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

/* Задание 4------------------------------------------------------
Напиши функцию countTotalSalary(employees) принимающую объект 
зарплат. Функция считает общую сумму запрплаты работников и 
возращает ее. Каждое поле объекта, передаваемого в функцию, 
имеет вид "имя":"зарплата". */

/*
1. создаем переменную тотал = 0
2. перебираем массив значений
3. на каждой итерации добаляем в тотал
*/

// const countTotalSalary = function (employees) {
//   let total = 0;
//   const values = Object.values(employees);
//   for (const value of values) {
//     total += value;
//   }
//   return total;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

/* Задание 5-------------------------------------------------------
Напиши функцию getAllPropValues(arr, prop), которая получает массив 
объектов и имя свойства. Возвращает массив значений определенного 
свойства prop из каждого объекта в массиве. */

/*
1. создаем пустой массив
2. перебираем существующий массив
3. если prop есть в ключе массива, то добавляем в новый массив
4. возвращаем новый массив
*/

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// // const getAllPropValues = function (arr, prop) {
// //   const newArr = [];
// //   for (const key of arr) {
// //     if (prop in key) {
// //       newArr.push(key[prop]);
// //     }
// //   }
// //   return newArr;
// // };

// const getAllPropValues = function (arr, prop) {
//   const newArr = [];
//   for (const keys of arr) {
//     for (const key in keys) {
//       if (key === prop) {
//         newArr.push(keys[key]);
//       }
//     }
//   }
//   return newArr;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

/* Задание 6-------------------------------------------------------
Напиши функцию calculateTotalPrice(allProdcuts, productName), 
которая получает массив объектов и имя продукта (значение 
  свойства name). Возвращает общую стоимость продукта 
  (цена * количество). */

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// /*
// 1. создаем переменную тоталпрайс = 0
// 2. перебираем массив
// 3. если имя продукта соответствует имени продукта в массиве,
// тогда прибавляем (цена на количество)
// 4. возвращаем тоталпрайс
// */

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let totalPrice = 0;
//   for (const product of allProdcuts) {
//     if (productName === product.name)
//       totalPrice += product.price * product.quantity;
//   }
//   return totalPrice;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

/* Корзина товаров-------------------------------------------------
 */

// const cart = {
//   items: [
//     { name: 'lemon', price: 120, quantity: 1 },
//     { name: 'melon', price: 90, quantity: 1 },
//   ],

//   // продукты в корзине
//   getProducts() {
//     return this.items;
//   },

//   // добавляем новый продукт в корзину
//   // если такой продукт есть в корзине, увеличиваем количество
//   add(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }

//     product.quantity = 1;
//     this.items.push(product);
//   },

//   // удаляем продукт из корзины
//   remove(productName) {
//     console.log(productName);

//     for (let i = 0; i < this.items.length; i += 1) {
//       const item = this.items[i];

//       if (productName === item.name) {
//         this.items.splice(i, 1);
//       }
//     }
//   },

//   // очищаем корзину
//   clear() {
//     this.items = [];

//     // лучше так не делать, но возможно и так очистить корзину
//     // this.items.length = 0;
//   },

//   // считаем общую стоимость товаров
//   countTotalPrice() {
//     let total = 0;
//     for (const item of this.items) {
//       console.log(item.price);
//       total += item.price * item.quantity;
//     }
//     return total;
//   },

//   // увеличить количество одного товара
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         item.quantity += 1;
//       }
//     }
//   },

//   // уменьшить количество одного товара
//   // если количество = 0, тогда удаляем товар из корзины
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         if (item.quantity - 1 === 0) {
//           this.remove(productName);
//           return;
//         }
//         item.quantity -= 1;
//       }
//     }
//   },
// };

// const allItems = [
//   { name: 'apple', price: 50 },
//   { name: 'lemon', price: 120 },
//   { name: 'melon', price: 90 },
//   { name: 'grapes', price: 150 },
//   { name: 'strawberry', price: 140 },
// ];

// console.table(cart.getProducts());
// cart.add(allItems[0]);
// cart.add(allItems[1]);
// cart.add(allItems[3]);
// cart.add(allItems[2]);

// console.table(cart.getProducts());
// // cart.remove('melon');
// // console.table(cart.getProducts());
// // cart.clear();
// // console.table(cart.getProducts());

// console.log(cart.increaseQuantity('grapes'));
// console.table(cart.getProducts());

// console.log(cart.decreaseQuantity('lemon'));
// console.log(cart.decreaseQuantity('apple'));
// console.table(cart.getProducts());

// console.log(cart.countTotalPrice());

// --------------------------------------------------------------
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
