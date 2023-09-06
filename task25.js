//Создать и добавить стиль для элемента: Напишите функцию, которая создает новый элемент, 
//добавляет его в DOM и устанавливает для него стиль с помощью CSS.


function createElement () {
    // нахожу элемент body, в который буду добавлять новый элемент
    const body = document.querySelector('body');
    // создаю элемент div
    let div = document.createElement('div');
    // добавляю класс, прописанный в css
    div.classList.add('wrapper');
    // в div добавляю текст заголовок h1
    div.innerHTML = "<h1>Hello!</h1>";
    // добавляю созданный элемент в начало body
    body.prepend(div);
}

createElement();