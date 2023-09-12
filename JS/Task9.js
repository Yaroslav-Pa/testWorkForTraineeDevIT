function add(x) {
  function innerAdd(y) {
    // Додаю y до поточного значення x
    x += y;
    // Повертаємо innerAdd, щоб продовжити додавати числа для наступного виклику
    return innerAdd;
  }

  // Перевизначаємо `valueOf` для отримання значення суми
  innerAdd.valueOf = () => {
    return x;
  };

  // Повертаю innerAdd як результат виклику функції add
  return innerAdd;
}
// Виконую функцію та виводжу результат
console.log(Number(add(1)(2))); // = 3
console.log(Number(add(1)(2)(5))); // = 8
console.log(Number(add(1)(2)(-3)(4))); // = 4
console.log(Number(add(1)(2)(3)(4)(-5))); // = 5
