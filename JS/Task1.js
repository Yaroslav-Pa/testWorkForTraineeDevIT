const deepEqual = (obj1, obj2) => {
  // Для перевірки двох об'єктів на ідентичність переводжу їх у формат JSON та порівнюю об'єкти
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

// Створюю два об'єкти
const object1 = { name: "nikola", hub: 1 };
const object2 = { name: "niko", hub: 112 };
// Виконую функцію та виводжу результат
const answer = deepEqual(object1, object2);
console.log(answer);
