//Задача о коллекции функций: у вас есть массив функций, напишите код, 
//который вызовет каждую функцию в этом массиве и выведет их порядковый номер. 
//Однако, вызов каждой функции должен происходить только после вызова предыдущей функции.

//Другими словами, нужно выполнить следующие шаги:
//1 Вызвать первую функцию из массива.
//2 После завершения работы первой функции вызвать вторую функцию.
//3 После завершения работы второй функции вызвать третью функцию.
//4 И так далее, пока все функции в массиве не будут вызваны по порядку.


// Создаем массив функций
const functionsArray = [
    () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Функция 1 выполнена");
          resolve();
        }, 1000); // Пример задержки в 1 секунду
      });
    },
    () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Функция 2 выполнена");
          resolve();
        }, 1000);
      });
    },
    () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Функция 3 выполнена");
          resolve();
        }, 1000);
      });
    },
  ];
  
// Функция для последовательного выполнения функций из массива
async function executeFunctionsSequentially() {
  for (const func of functionsArray) {
    // Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, 
    // пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.
    await func();
  }
}
  
// Вызываем функцию для последовательного выполнения

// executeFunctionsSequentially()
//   .then(() => { // при успешном выполнении
//     console.log("Все функции выполнены");
//   })
//   .catch((error) => { // при выполнении с ошибкой
//     console.error("Ошибка: " + error);
//   });


