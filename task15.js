//Задача на асинхронность: напишите асинхронную функцию, которая использует ключевое слово await 
//для ожидания выполнения других асинхронных операций, и возвращает результат выполнения.


// async функция всегда возвращает промис
async function fun() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });

  // await можно использовать только внутри async-функций
  // await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. 
  // После чего оно вернёт его результат, и выполнение кода продолжится.
  let result = await promise; // будет ждать, пока промис не выполнится (*)

  console.log(result); // "готово!"
}
  
//fun();

//В данном примере выполнение функции остановится на строке (*) до тех пор, пока промис не выполнится.
// Это произойдёт через секунду после запуска функции. После чего в переменную result будет записан результат выполнения промиса.