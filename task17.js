// Необходимо реализовать простое поле ввода адреса с функцией геокодинга: 
// пользователь вводит данные в поле с помощью одного из геоинформационных сервисов (Яндекс.Карты, ДаДата, GraphHopper), 
// подбирается адрес. Найденные данные должны отображаться в выпадающем списке, из которого можно выбрать подходящее значение.
// Реализовать дебоунсинг и защиту от троттлинга с помощью замыканий.


const addressInput = document.getElementById('addressInput');
const addressDropdown = document.getElementById('addressDropdown');

// Функция для отправки запроса на геокодирование к Яндекс.Картам
async function geocodeYandexMaps(address) {
  const apiKey = 'f038712a-acff-4388-b3f3-e423b9cdfda3'; // API-ключ 
  const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${address}`;

  try {
    const response = await fetch(url);
    const data = await response.json(); // Это переменная, которая хранит данные, полученные в ответ на запрос геокодирования, в формате JSON
    const results = data.response.GeoObjectCollection.featureMember; //результаты геокодирования, включая найденные местоположения

    // Очистить предыдущие результаты
    addressDropdown.innerHTML = '';

    // Заполнить выпадающий список найденными адресами
    results.forEach(result => {
      const addressName = result.GeoObject.name;
      const option = document.createElement('option');
      option.text = addressName;
      addressDropdown.appendChild(option);
    });
  } catch (error) {
    console.error('Ошибка при выполнении геокодирования:', error);
  }
}

// Обработчик события ввода адреса
addressInput.addEventListener('input', (event) => {
  const address = event.target.value;
  geocodeYandexMaps(address);
});