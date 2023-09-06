//Разработайте функцию преобразования JSON в связный список. 
//На входе функция должна получать JSON, содержащий список объектов, на выходе объект, 
//представляющий из себя односвязный список.


// Определение класса для связанного списка
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Функция для создания связанного списка из массива данных
  function createLinkedListFromArray(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    const head = new Node(arr[0]); // {"name": "John", "age": 30}
    let current = head;
  
    for (let i = 1; i < arr.length; i++) { // с помощью цикла заполняю список данными
      const newNode = new Node(arr[i]);
      current.next = newNode;
      current = newNode;
    }
  
    return head;
  }
  
  // Функция для преобразования JSON в связанный список
  function jsonToLinkedList(jsonData) {
    const data = JSON.parse(jsonData); // JSON. parse() берет строку JSON и трансформирует ее в объект JavaScript
  
    if (Array.isArray(data)) {
      return createLinkedListFromArray(data);
    } else {
      throw new Error('JSON должен быть массивом данных');
    }
  }
  
  // Пример JSON
  const jsonData = '[{"name": "John", "age": 30}, {"name": "Jane", "age": 25}, {"name": "Bob", "age": 35}]';
  
  // Преобразование JSON в связанный список
  try {
    const linkedListComplex = jsonToLinkedList(jsonData);
  
    // Вывод связанного списка в консоль
    //console.log("Связанный список для JSON:");
    printLinkedList(linkedListComplex);

  } catch (error) {
    console.error(error.message);
  }
  
  // Функция для вывода связанного списка в консоль
  function printLinkedList(head) {
    let currentNode = head;
    while (currentNode !== null) {
      //console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }