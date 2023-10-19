//Подсчитать максимальный объем данных, который можно записать в localStorage вашего браузера.

function calculateMaxLocalStorageSize() {
  try {
    if (!window.localStorage) {
      throw new Error('localStorage is not available in this browser.');
    }
  
    // Создаем строку данных, чтобы узнать, сколько места она займет
    const testData = 'a'.repeat(3.9 * 1024 * 1024); // 3.9 MB
    localStorage.setItem('testData', testData);
  
    // Замеряем размер данных в localStorage
    const usedSpace = JSON.stringify(localStorage).length; // 4.911829948425293 MB
  
    // Удаляем тестовые данные
    localStorage.removeItem('testData');
  
    return usedSpace;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
  
const maxLocalStorageSize = calculateMaxLocalStorageSize();
  
if (maxLocalStorageSize !== null) {
  //console.log(`Максимальный объем данных, который можно записать в localStorage, составляет примерно ${maxLocalStorageSize / (1024 * 1024)} MB`);
} else {
  //console.log('Не удалось определить максимальный объем данных для localStorage.');
}
