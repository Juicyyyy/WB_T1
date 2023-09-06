//Рекурсивный обход дерева DOM:: Напишите функцию, которая рекурсивно обходит дерево DOM, 
//начиная с указанного элемента, и выполняет определенное действие с каждым узлом (например, выводить информацию о теге в консоль).


// функция обхода дочерних элементов конкретного HTML элемента
const getTree = (element) => {
    // собираю массив из дочерних элементов
    const childElements = [...element.children];
     
    if (childElements.length > 0) {
        // передаю на каждой итерации название тега в консоль
      childElements.map(elem => {
        console.log(elem.tagName);
        //  если тег имеет вложенные элементы запускает рекурсию для этого элемента
        if (elem.children) {
            getTree(elem);
        }
      })
    } 
}

const body = document.querySelector('body');
//getTree(body);

