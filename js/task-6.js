/* Задача 3-6
Суммирование значений свойства из массива объектов
Напиши функцию calculateTotalPrice(allProdcuts, productName), 
которая получает массив объектов и имя продукта (значение свойства 
name). Возвращает общую стоимость продукта (цена умноженная 
на количество).

Вызовы функции для проверки работоспособности твоей реализации.

// calculateTotalPrice(products, 'Радар'));
// 9080

// calculateTotalPrice(products, 'Сканер')); // 10200

// calculateTotalPrice(products, 'Захват')); // 2400

// calculateTotalPrice(products, 'Дроид')); // 2800 */

/* 
1. перебрать объекты через фор оф
2. вернуть массив со свойствами объекта
3. если первое свойство соответствует prop,
тогда умножить его цену на количество и добавить в тотал прайс
4. вернуть тотал прайс
*/

function calculateTotalPrice(array, prop) {
  let totalPrice = 0;
  for (const products of array) {
    const values = Object.values(products);
    if (values[0] === prop) {
      totalPrice += values[1] * values[2];
    }
  }
  return totalPrice;
}

// function calculateTotalPrice(array, prop) {
//   let totalPrice = 0;
//   for (const products of array) {
//     if (products.name === prop) {
//       totalPrice += products.price * products.quantity;
//     }
//   }
//   return totalPrice;
// }

// function calculateTotalPrice(array, prop) {
//   let totalPrice = 0;
//   for (const { name, price, quantity } of array) {
//     if (name === prop) {
//       totalPrice += price * quantity;
//     }
//   }
//   return totalPrice;
// }

// Объекты и ожидаемый результат
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, 'Радар'));
// 9080

console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

console.log(calculateTotalPrice(products, 'Захват'));
// 2400

console.log(calculateTotalPrice(products, 'Дроид'));
// 2800
