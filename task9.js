//Реализовать функцию конвертации JSON в строку

function customJsonStringify(jsonObject) {
  // Если аргумент не объект, просто возвращаем его как строку
  if (typeof jsonObject !== 'object' || jsonObject === null) {
    return String(jsonObject);

  // Если это массив, обрабатываем его элементы
  } else if (Array.isArray(jsonObject)) {
    const elements = jsonObject.map((element) => customJsonStringify(element));
    return `[${elements.join(',')}]`;

  } else { // Если это объект, обрабатываем его свойства
    const properties = Object.keys(jsonObject)
    .map((key) => `"${key}":${customJsonStringify(jsonObject[key])}`).join(',');
    return `{${properties}}`;
  }
}
  
// пример json
const jsonObject = {
  name: "John",
  age: 30,
  city: "New York"
};
  
const jsonString = customJsonStringify(jsonObject);
  
//console.log(jsonString);


