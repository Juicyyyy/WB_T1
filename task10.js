// Реализовать функцию конвертации строки в JSON со всеми необходимыми проверками и валидациями.


function stringToJson(jsonStr) {
  // Удаляем лишние пробелы в начале и конце строки
  jsonStr = jsonStr.trim();
  
  // Проверяем, что строка начинается с '{' и заканчивается '}' - это базовая проверка на объект JSON
  if (jsonStr[0] !== '{' || jsonStr[jsonStr.length - 1] !== '}') {
    console.error("Ошибка: Неправильный формат JSON.");
    return null;
  }
  
  try {
    // Убираем фигурные скобки и разделяем строку по запятой
    const keyValuePairs = jsonStr.slice(1, -1).split(',');
  
    const jsonObj = {};
  
    // Проходим по каждой паре ключ-значение и добавляем их в объект JSON
    keyValuePairs.forEach(keyValuePair => {
      const [key, value] = keyValuePair.split(':');
      const cleanKey = key.trim().slice(1, -1); // Убираем кавычки и убираем пробелы
      let cleanValue = value.trim();
  
      // Проверяем, является ли значение строкой и убираем кавычки
      if (cleanValue[0] === '"' && cleanValue[cleanValue.length - 1] === '"') {
        cleanValue = cleanValue.slice(1, -1);
      }
  
      // Преобразуем числа и логические значения
      if (/^-?\d+(\.\d+)?$/.test(cleanValue)) {
        if (cleanValue.includes('.')) {
          jsonObj[cleanKey] = parseFloat(cleanValue);
      } else {
          jsonObj[cleanKey] = parseInt(cleanValue, 10);
        }
      } else if (cleanValue === 'true' || cleanValue === 'false') {
        jsonObj[cleanKey] = cleanValue === 'true';
      } else if (cleanValue === 'null') {
        jsonObj[cleanKey] = null;
      } else {
        // Если значение не подходит ни под один из вышеуказанных случаев, оставляем его как строку
        jsonObj[cleanKey] = cleanValue;
      }
    });
  
    return jsonObj;
  } catch (error) {
    console.error("Ошибка при конвертации строки в JSON:", error);
    return null;
  }
}
  
const jsonStr = '{"name": "John", "age": 30}';
const jsonObj = stringToJson(jsonStr);
  
//console.log(jsonObj); 
  

