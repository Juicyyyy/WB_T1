//Реализовать виджет, отображающий список постов из любого паблика в VK (подойдет любой паблик, где постов очень много). 
//Например, с помощью этой функции API VK. Виджет должен иметь фиксированные размеры и возможность прокрутки. 
//При прокрутке содержимого виджета до конца должны подгружаться новые посты. Необходимо реализовать возможность кэширования 
//уже загруженных данных: если пользователь закрыл страницу, а потом снова открыл ее, виджет должен отображать все загруженные 
//ранее данные (новые данные должны подгружаться из учетом уже загруженных ранее).

//При переполнении localStorage, данные, загруженные последними должны вытеснять данные загруженные первыми.


const widget = document.getElementById('vk-widget');
const postList = document.getElementById('post-list');
let offset = 0;
const count = 10; // Количество постов для загрузки
const apiEndpoint = 'https://api.vk.com/method/wall.get';
const accessToken = 'd923b13fd923b13fd923b13f8bda363beddd923d923b13fbddb9023c98c3167b48fe57f';

function loadPosts() {
    fetch(`${apiEndpoint}?owner_id=-122103467&count=${count}&offset=${offset}&access_token=${accessToken}&v=5.131`, {mode: 'no-cors'})
        .then(response => response.json())
        .then(data => {
            const posts = data.response.items;
            if (posts.length === 0) {
                // Если нет больше постов, прекратить загрузку
                return;
            }

            posts.forEach(post => {
                const listItem = document.createElement('li');
                listItem.textContent = post.text;
                postList.appendChild(listItem);
            });

        })
        .catch(error => {
            console.error('Ошибка загрузки постов: ' + error);
        });
}

loadPosts(); 


