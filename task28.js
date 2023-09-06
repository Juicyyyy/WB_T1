// Создать и добавить элемент с использованием шаблонов: Напишите функцию, 
// которая создает новый элемент с использованием шаблонов (например, с помощью тега <template>) и добавляет его в DOM.


function createElementTemplate () {
    // создаю новый элемент div
    let elem = document.createElement('div');

    // Клонирую содержимое шаблона для того, чтобы переиспользовать его несколько раз
    elem.append(template.content.cloneNode(true));
    
    // добавляю созданный элемент в DOM
    document.body.prepend(elem);
}

createElementTemplate();



