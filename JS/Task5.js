// Створюю об'єкт
const obj = {
  name: "developer",
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5,
  },
};

function objectToArray(obj) {
  // Створюю масив для збереження результату
  const arr = [];
  //  Перебираю ключі об'єкту
  for (const key in obj) {
    // Перевірка чи є елемент об'єктом та не є масивом
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      // Рекурсивно викликаю функцію objectToArray для конвертації в масив
      arr.push([key, objectToArray(obj[key])]);
    } else {
      // Записую його до масива по парам [ключ та елемент]
      arr.push([key, obj[key]]);
    }
  }
  // Повертаю результат - масив
  return arr;
}
// Виконую функцію та виводжу результат
const result = objectToArray(obj);
console.log(JSON.stringify(result));
