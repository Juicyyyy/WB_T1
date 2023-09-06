//Задача о замыканиях: напишите функцию, которая будет принимать массив функций и возвращать новую функцию, 
//которая вызывает каждую функцию в этом массиве и возвращает массив результатов, полученных после вызова каждой функции.


function executeFunctionsAndGetResults(functionArray) {
    return function () {
      const results = [];
  
      for (const func of functionArray) { // с помощью цикла вызываю функции из массива по очереди
        const result = func();
        results.push(result); // записываю результат каждой функции в новый массив results
      }
  
      return results;
    };
  }
  
  const func1 = () => 1;
  const func2 = () => 2;
  const func3 = () => 3;
  
  // массив функций
  const functionArray = [func1, func2, func3];
  
  const combinedFunction = executeFunctionsAndGetResults(functionArray);
  
  const results = combinedFunction();
  //console.log(results); // Выведет: [1, 2, 3]