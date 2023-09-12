//  Оголошую масив arr
const arr = [
  ["name", "developer"],
  ["age", 5],
  [
    "skills",
    [
      ["html", 4],
      ["css", 5],
      ["js", 5],
    ],
  ],
];

function arrayToObject(arr) {
  // Створюю об'єкт для збереження результату
  const obj = {};
  //  Перебираю елементи масиву arr з [ключом та елементом].
  for (const [key, value] of arr) {
    // Перевірка чи є елемент масивом
    if (Array.isArray(value)) {
      // Рекурсивно викликаю функцію arrayToObject для конвертації в об'єкт
      obj[key] = arrayToObject(value);
    } else {
      // Записую його до об'єкта
      obj[key] = value;
    }
  }
  // Повертаю результат конвертації масиву в об'єкт
  return obj;
}
// Виконую функцію та виводжу результат
console.log(arrayToObject(arr));
