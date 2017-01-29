let generator = function* () {
  yield 1;
  yield* [2,3,4];
  yield 5;
};

var iterator = generator();

console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 1, done: false }
