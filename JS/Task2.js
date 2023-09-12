// Створюю генераторну функцію, що має розбивати масив за зазначеною довжиною, кожного разу коли викликають .next працюючи до наступного yield
function* chunkArray(mass, int) {
  //Цикл що має розбивати масив за int довжиною
  for (let i = 0; i < mass.length; i += int) {
    // Використовую yield для генераторного об'єкта,
    yield mass.slice(i, i + int);
  }
}
// Створення ітератору для розбиття масиву на підмасиви у 3 числа
const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
//Вивід підмасивів по 3
console.log(iterator.next()); // { value: [1,2,3], done: false }
console.log(iterator.next()); // { value: [4,5,6], done: false }
console.log(iterator.next()); // { value: [7,8], done: false }
console.log(iterator.next()); // { done: true }
