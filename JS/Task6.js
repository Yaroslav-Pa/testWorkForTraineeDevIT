function NotificationException() {}
function ErrorException() {}

function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

function reliableMultiply(a, b) {
  try {
    // Виконую функцію primitiveMultiply з значеннями a та b
    return primitiveMultiply(a, b);
  } catch (exception) {
    // Перевіряю чи є помилка типом NotificationException
    if (exception instanceof NotificationException) {
      // Виводжу "NotificationException" та знову запускаю функцію reliableMultiply
      return console.log("NotificationException"), reliableMultiply(a, b);
      // Перевіряю чи є помилка типом ErrorException
    } else if (exception instanceof ErrorException) {
      // Виводжу помилку "NotificationException"
      return exception;
      // Якщо помилка є жодним з типів
    } else {
      // Виводжу помилку
      return exception;
    }
  }
}

console.log(reliableMultiply(8, 8));
