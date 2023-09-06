//Задача о сортировке объектов: у вас есть массив объектов вида { name: 'John', age: 25 }. 
//Напишите код, который сортирует этот массив по возрастанию возраста, а при равных возрастах сортирует по алфавиту по полю name.


//Для сравнения строк можно использовать String.localeCompare() метод.

    let users = [
        { name: "John", age: 20},
        { name: "Vlad", age: 35},
        { name: "Julia", age: 19},
        { name: "Anna", age: 20},
        { name: "Been", age: 20}
    ];

    users.sort(function (x, y) {
        // сначала сортируем по полю 'age'
        if (x.age === y.age) {
          return x.name.localeCompare(y.name);
        } 
        // если имена совпадают, то сортируем по 'name'
        else {
           return x.age - y.age;
        }
    });

 //console.log(users);


