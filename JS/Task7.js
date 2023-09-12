function mapObject(obj, parentKey = "") {
  // Створюю об'єкт для збереження результату
  let result = {};
  // Перебираю ключі у об'єкті obj
  for (let key in obj) {
    // Створення нового ключа, додаючи поточний до батьківського
    const newKey = parentKey ? `${parentKey}/${key}` : key;
    // Перевірка значення поточного ключа на те що він є об'єктом та не є масивом
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      // Рекурсивне викликання функції для вкладеного об'єкта
      const flattened = mapObject(obj[key], newKey);
      // Об'єдную результат вкладеного об'єкту зі значеннями попередніх
      result = { ...result, ...flattened };
    } else {
      // Записую до результату
      result[newKey] = obj[key];
    }
  }
  // Повертаю результат конвертації
  return result;
}
// Створюю об'єкт для надання у фунцію
const obj = {
  a: {
    b: {
      c: 12,
      d: "Hello World",
    },
    e: [1, 2, 3],
  },
};
// Виконую функцію та виводжу результат
console.log(mapObject(obj));
