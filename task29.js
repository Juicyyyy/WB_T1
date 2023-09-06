// Взаимодействие с формами: Напишите функцию, которая получает данные из формы на веб-странице и 
// выполняет определенные действия с этими данными, например, отправляет их на сервер или отображает всплывающее окно с результатами.


function getForm () {
    const form = document.forms.myForm; // извлекаем элемент формы

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form); // создаём объект FormData, передаём в него элемент формы
        // теперь можно извлечь данные
        const name = formData.get('name'); 
        const surname = formData.get('surname'); 

        alert(name + ' ' + surname);
    });

}

getForm();