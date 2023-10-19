//Реализовать виджет, отображающий список постов из любого паблика в VK (подойдет любой паблик, где постов очень много). 
//Например, с помощью этой функции API VK. Виджет должен иметь фиксированные размеры и возможность прокрутки. 
//При прокрутке содержимого виджета до конца должны подгружаться новые посты. Необходимо реализовать возможность кэширования 
//уже загруженных данных: если пользователь закрыл страницу, а потом снова открыл ее, виджет должен отображать все загруженные 
//ранее данные (новые данные должны подгружаться из учетом уже загруженных ранее).

//При переполнении localStorage, данные, загруженные последними должны вытеснять данные загруженные первыми.

const widget = document.getElementById('widget');
const apiKey = 'd923b13fd923b13fd923b13f8bda363beddd923d923b13fbddb9023c98c3167b48fe57f'; // API-ключ VK
const ownerId = '122103467'; // ID паблика VK
const postsPerPage = 9; // Количество постов на странице
let offset = 0; // Смещение для загрузки следующей порции постов
let postsCache = []; // Кэш для хранения загруженных данных

// Функция для загрузки постов из VK API с использованием JSONP
function loadPosts() {
  const script = document.createElement('script');
  script.src = `https://api.vk.com/method/wall.get?owner_id=-${ownerId}&count=${postsPerPage}&offset=${offset}&access_token=${apiKey}&v=5.130&callback=handlePostsResponse`;
  document.body.appendChild(script);
}

// Функция для обработки ответа от VK API
function handlePostsResponse(response) {
  if (response.error) {
    console.error('Ошибка при загрузке постов:', response.error);
    return;
  }

  const newPosts = response.response.items;
  if (newPosts.length === 0) {
    console.log('Больше постов нет.');
    return;
  }

 // Добавляем новые посты в кэш
 postsCache = postsCache.concat(newPosts);

 //Вытесняем старые данные, если локальное хранилище переполнено
 if (postsCache.length >= 10) {
    postsCache.shift();
}

  // Обновляем отображение постов
  renderPosts();
}

// Функция для отображения постов
function renderPosts() {
  widget.innerHTML = ''; // Очищаем содержимое виджета

  for (const post of postsCache) {
    const postElement = document.createElement('div');
    const postText = document.createElement('p');
    postElement.classList.add('widget__item');
    postText.classList.add('widget__text');
    postText.textContent = post.text;
    postElement.appendChild(postText);
    
    if (post.attachments && post.attachments.length > 0) {
        for (const attachment of post.attachments) {
        if (attachment.type === 'photo') {
            const photo_url = attachment.photo.sizes[attachment.photo.sizes.length - 1].url;

            // Создаем тег <img> и устанавливаем его src атрибут
            const postImg = document.createElement('img');
            postImg.classList.add('widget__img');
            postImg.src = photo_url;

            // Добавляем изображение 
            postElement.appendChild(postImg);
            }
        }
    }
    widget.appendChild(postElement);
  }
}

// Функция для загрузки новых постов
async function loadMorePosts() {
  // Увеличиваем смещение для подгрузки следующей порции постов
  offset += postsPerPage;
  // Загружаем следующую порцию постов
  loadPosts();
}

// Добавляем обработчик события прокрутки для загрузки новых постов
widget.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = widget;
  if (scrollTop + clientHeight >= scrollHeight) {
    loadMorePosts();
  }
});

// Инициализация виджета
function initWidget() {
  // Загружаем посты при инициализации виджета
  loadPosts();
  
  // Отображаем кэшированные посты
  renderPosts();
}

initWidget();

