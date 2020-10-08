/* Задача 3-5
Оператор in и метод push
Напиши функцию getAllPropValues(arr, prop), которая получает 
массив объектов и имя свойства.

Функция возвращает массив значений определенного свойства 
prop из каждого объекта в массиве.

Используй метод push для добавления значения в массив и 
оператор in для проверки наличия свойства в объекте. */

function getAllPropValues(array, prop) {
  //   console.table(arr);
  let newArr = [];
  for (const key in array) {
    let obj = array[key];
    const keys = Object.keys(obj);

    for (const key of keys) {
      if (obj[prop]) {
        newArr.push(obj[prop]);
        break;
      }
    }
  }
  return newArr;
}

// function getAllPropValues(array, prop) {
//   let newArr = [];
//   for (const key in array) {
//     let obj = array[key];
//     const keys = Object.keys(obj);

//     for (const key of keys) {
//       if (key === prop) {
//         newArr.push(obj[key]);
//       }
//     }
//   }
//   return newArr;
// }

// function getAllPropValues(array, prop) {
//   const property = [];
//   for (const product of array) {
//     for (const key in product) {
//       if (key === prop) {
//         property.push(product[key]);
//       }
//     }
//   }
//   return property;
// }

// function getAllPropValues(array, prop) {
//   //   console.table(arr);
//   let newArr = [];

//   for (const key of array) {
//     if (prop in key) {
//       newArr.push(key[prop]);
//     }
//   }
//   return newArr;
// }

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Радар', price: 1280, quantity: 2 },
  { name: 'Радар', price: 1320, quantity: 1 },
  { name: 'Сканер', price: 2700, quantity: 1 },
  { name: 'Сканер', price: 2500, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

console.log(getAllPropValues(products, 'category'));
//  []
