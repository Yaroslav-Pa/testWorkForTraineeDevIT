function combos(num) {
  // Створюю функцію для рекурсії
  function backtrack(start, remaining, currentCombo) {
    // Перевіряю чи залишок від необхідної сумми дорівнює нулю
    if (remaining === 0) {
      // Надсилаю у масив
      result.push([...currentCombo]);
      // Повертаюсь
      return;
    }

    // Перебираю усі значення від start до remaining
    for (let i = start; i <= remaining; i++) {
      // Додаємо поточне число i до поточної комбінації.
      currentCombo.push(i);
      // Рекурсивно вкиликаю функцію підставляючи поточне i, зменьшений remaining на i та поточний масив з значеннями
      backtrack(i, remaining - i, currentCombo);
      // Вилучаю останне число у масиві
      currentCombo.pop();
    }
  }

  // Створюю масив для відповіді
  const result = [];
  // Запускаю функцію з початком на 1, num - необхідною сумою та порожнім масивом
  backtrack(1, num, []);
  // Повертаю масив для відповіді
  return result;
}
// Створюю num зі значенням 5
const num = 5;
// Виконую функцію та виводжу результат
const combinations = combos(num);
console.log(combinations);
