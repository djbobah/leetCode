// 2704. Быть или не быть
// Легкий

// Напишите функцию  expect, которая поможет разработчикам тестировать свой код. Он должен принимать любое значение
// val и возвращать объект с помощью следующих двух функций.

// toBe(val) принимает другое значение и возвращает значение,  true если эти два значения  === друг друга. Если они не равны,
// должна возникнуть ошибка  "Not Equal".
// notToBe(val) принимает другое значение и возвращает значение,  true если эти два значения  !== друг друга. Если они равны,
// должна возникнуть ошибка  "Equal".

// var expect = function (val) {
//   return {
//     toBe: function (newVal) {
//       if (val === newVal) return true;
//       else throw new Error("Not Equal");
//     },
//     notToBe: function (newVal) {
//       if (val !== newVal) return true;
//       else throw new Error("Equal");
//     },
//   };
// };

// console.log(expect(5).toBe(4));

// 2665. Счетчик II
// Легкий
// Напишите функцию  createCounter. Он должен принимать начальное целое число  init. Он должен возвращать объект с тремя функциями.

// Три функции:

// increment() увеличивает текущее значение на 1, а затем возвращает его.
// decrement() уменьшает текущее значение на 1, а затем возвращает его.
// reset() устанавливает текущее значение  init и затем возвращает его.

// var createCounter = function (init) {
//   let counter = init;
//   return {
//     increment: function () {
//       return ++counter;
//     },
//     reset: () => {
//       counter = init;
//       return init;
//     },
//     decrement: () => {
//       return --counter;
//     },
//   };
// };

// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// 2635. Apply Transform Over Each Element in Array
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.
var map = function (arr, fn) {
  const returnedArray = [];
  for (let i = 0; i < arr.length; i++) {
    returnedArray[i] = fn(arr[i], i);
  }
  return returnedArray;
};
